import { Link } from "react-router-dom";
import { urlFor } from "../lib/sanity";

const audienceMap = {
  parents: "Ebeveynler",
  children: "Çocuklar",
  teachers: "Öğretmenler",
};

export function getExcerptFromBody(body, charLimit = 150) {
  if (!Array.isArray(body)) return "";
  const firstBlock = body.find((block) => block._type === "block");
  if (!firstBlock || !firstBlock.children) return "";
  const text = firstBlock.children.map((child) => child.text).join(" ");
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
}

export default function ContentCard({ post }) {
  if (!post) return null;

  return (
    <Link
      to={`/blog/posts/${post.slug.current}`}
      className="block w-full group"
    >
      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-[1.01]">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
          {post.image && (
            <img
              src={urlFor(post.image).url()}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          )}
        </div>

        <div className="p-6 w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime} dk</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-medium">
                {(() => {
                  if (!post.targetAudience) return "Okuyucu";
                  if (Array.isArray(post.targetAudience)) {
                    const mapped = post.targetAudience.map(
                      (aud) => audienceMap[aud] || aud
                    );
                    return mapped.map((item) => `• ${item}`).join(" ");
                  }
                  return audienceMap[post.targetAudience] || "Okuyucu";
                })()}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-500 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            <p className="mt-4 text-gray-600 text-base leading-relaxed line-clamp-3">
              {getExcerptFromBody(post.body, 200)}
            </p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-gray-500 gap-2 md:gap-0">
            <div className="flex flex-wrap gap-2">
              {post.categories?.map((cat) => (
                <span
                  key={cat._id}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 font-medium"
                >
                  {cat.title}
                </span>
              ))}
            </div>

            <span className="font-semibold text-gray-700 ">
              {post.author?.name || "Bilinmiyor"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
