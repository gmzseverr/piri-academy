import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ContentCard from "./ContentCard";
import { client as sanityClient } from "../lib/sanity";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

// Dinamik GROQ sorgusu
const postsQuery = (searchTerm, categories, audiences) => {
  let query = `*[_type == "post"`;

  if (searchTerm) {
    query += ` && (title match "${searchTerm}*" || author->name match "${searchTerm}*")`;
  }

  if (categories.length > 0) {
    const categoryIds = categories.map((id) => `"${id}"`).join(", ");
    query += ` && references([${categoryIds}])`;
  }

  if (audiences.length > 0) {
    const audienceValues = audiences.map((val) => `"${val}"`).join(", ");
    // Burada array içinde arama yapıyoruz:
    query += ` && targetAudience[] in [${audienceValues}]`;
  }

  query += `] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    readTime,
    'image': image.asset->,
    body,
    targetAudience,
    'author': author->{name, 'authorImage': image.asset->},
    'categories': categories[]->{_id, title}
  }`;

  return query;
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  // Parametreleri memoize ediyoruz
  const { searchTerm, selectedCategories, selectedAudiences } = useMemo(() => {
    return {
      searchTerm: searchParams.get("search") || "",
      selectedCategories: searchParams.getAll("categories"),
      selectedAudiences: searchParams.getAll("targetAudiences"),
    };
  }, [searchParams.toString()]);

  useEffect(() => {
    let isMounted = true;
    async function fetchPosts() {
      setIsLoading(true);
      setError(null);

      try {
        const query = postsQuery(
          searchTerm,
          selectedCategories,
          selectedAudiences
        );
        const data = await sanityClient.fetch(query);
        if (isMounted) {
          setPosts(data);
        }
      } catch (err) {
        console.error("Sanity verileri çekilemedi: ", err);
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, [searchTerm, selectedCategories, selectedAudiences]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Bir hata oluştu.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
          Blog Yazıları
        </h1>

        <div className="mb-10 flex items-center gap-6 justify-end">
          <FilterBar />
          <SearchBar />
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <ContentCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12">
            {searchTerm ||
            selectedCategories.length > 0 ||
            selectedAudiences.length > 0
              ? "Bu filtrelemeye uygun içerik bulunamadı."
              : "Henüz hiç blog yazısı bulunmuyor."}
          </div>
        )}
      </div>
    </div>
  );
}
