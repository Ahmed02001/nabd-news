"use client";
import { useState, useEffect, useRef } from "react";
import NewsCard from "@/components/NewsCard";
import getNews from "@/lib/categoryAPI";

export default function NewsList({ initialArticles, query }) {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  async function loadMore() {
    setLoading(true);
    try {
      const articles = await getNews(query, page);

      if (!articles || articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prev) => [...prev, ...articles]);
        setPage((prev) => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, page]);

  return (
    <div>
      {articles?.map((a, i) => (
        <NewsCard key={i} article={a} />
      ))}

      {/* 👇 invisible div at bottom — triggers loadMore when visible */}
      <div ref={loaderRef} style={{ height: "50px" }} />

      {loading && <p>جاري التحميل...</p>}
      {!hasMore && <p>لا توجد مقالات أخرى</p>}
    </div>
  );
}
