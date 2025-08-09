import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client as sanityClient, urlFor } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";

// Sanity'deki Block Content'i render etmek için serializers
const serializers = {
  types: {
    block: (props) => {
      // Normal blokları render et
      const { style = "normal" } = props.node;
      if (/^h\d/.test(style)) {
        const HeadingTag = style;
        return (
          <HeadingTag className="text-2xl font-bold mt-6 mb-2">
            {props.children}
          </HeadingTag>
        );
      }
      return (
        <p className="text-gray-700 leading-relaxed mb-4">{props.children}</p>
      );
    },
    image: (props) => {
      // Görselleri render et
      return (
        <figure className="my-6">
          <img
            src={urlFor(props.node).url()}
            alt={props.node.alt}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </figure>
      );
    },
  },
  list: (props) => {
    // Listeleri render et
    return <ul className="list-disc list-inside mb-4">{props.children}</ul>;
  },
  listItem: (props) => {
    // Liste elemanlarını render et
    return <li className="text-gray-700 leading-relaxed">{props.children}</li>;
  },
};

const audienceMap = {
  parents: "Ebeveyn",
  children: "Çocuk",
  teachers: "Öğretmen",
};

export default function ContentDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError(new Error("Slug bulunamadı."));
      setIsLoading(false);
      return;
    }

    const postDetailQuery = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      publishedAt,
      readTime,
      body,
      targetAudience,
      'image': image.asset->,
      'author': author->{name, 'authorImage': image.asset->},
      'categories': categories[]->{_id, title},
      gallery,
      video{youtubeUrl, 'fileUrl': file.asset->url},
      references,
      seo{metaTitle, metaDescription, 'ogImage': ogImage.asset->url}
    }`;

    async function fetchPost() {
      setIsLoading(true);
      try {
        const data = await sanityClient.fetch(postDetailQuery, { slug });
        if (data) {
          setPost(data);
        } else {
          setError(new Error("İçerik bulunamadı."));
        }
      } catch (err) {
        console.error("Sanity verileri çekilemedi: ", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen pt-20 pb-12">
        <p className="text-xl">İçerik yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen pt-20 pb-12">
        <p className="text-xl text-red-500">Bir hata oluştu: {error.message}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen pt-20 pb-12">
        <p className="text-xl text-gray-500">İçerik bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl pt-14 pb-5 font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>
        {post.image && (
          <img
            src={urlFor(post.image).url()}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
          />
        )}

        <div className="flex items-center space-x-4 text-gray-600 mb-6 border-b pb-4">
          {post.author && (
            <div className="flex items-center space-x-2">
              {post.author.authorImage && (
                <img
                  src={urlFor(post.author.authorImage)
                    .width(30)
                    .height(30)
                    .url()}
                  alt={post.author.name}
                  className="rounded-full w-8 h-8"
                />
              )}
              <span className="font-semibold">{post.author.name}</span>
            </div>
          )}
          <span className="text-gray-400">•</span>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faClock} />
            <span>{post.readTime} dakika okuma</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.body && (
            <BlockContent blocks={post.body} serializers={serializers} />
          )}
        </div>

        {/* Kategoriler */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-2">Kategoriler</h4>
          <div className="flex flex-wrap gap-2">
            {post.categories?.map((cat) => (
              <span
                key={cat._id}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {cat.title}
              </span>
            ))}
          </div>
        </div>

        {/* Hedef Kitle */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-2">Hedef Kitle</h4>
          <div className="flex flex-wrap gap-2">
            {post.targetAudience?.map((audience, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                {audienceMap[audience] || audience}
              </span>
            ))}
          </div>
        </div>

        {/* Galeri */}
        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">Galeri</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.gallery.map((image, index) => (
                <img
                  key={index}
                  src={urlFor(image).url()}
                  alt={`Galeri görseli ${index + 1}`}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Video */}
        {post.video && (post.video.youtubeUrl || post.video.fileUrl) && (
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">Video</h4>
            <div className="aspect-w-16 aspect-h-9">
              {post.video.youtubeUrl && (
                <iframe
                  src={post.video.youtubeUrl.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                  className="w-full h-full rounded-lg"
                ></iframe>
              )}
              {post.video.fileUrl && !post.video.youtubeUrl && (
                <video controls className="w-full h-full rounded-lg">
                  <source src={post.video.fileUrl} />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              )}
            </div>
          </div>
        )}

        {/* Kaynakça */}
        {post.references && post.references.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">Kaynakça</h4>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              {post.references.map((ref, index) => (
                <li key={index}>
                  <p>
                    {ref.author}, "{ref.title}"
                    {ref.source && <span>, {ref.source}</span>}
                    {ref.date && <span>, {ref.date}</span>}.
                    {ref.url && (
                      <a
                        href={ref.url}
                        className="text-blue-600 hover:underline ml-1"
                      >
                        (Kaynak)
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
