"use client";
import { useState, useEffect, useRef } from "react";
import { getImages } from "@/lib/imagesAPI";
import { ImageListItem } from "@mui/material";
import Image from "next/image";

export default function NewImages({ initialImages, category }) {
  const [images, setImages] = useState(initialImages);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  function loadMore() {
    setLoading(true);
    try {
      getImages(category, page)
        .then((res) => setImages(res))
        .catch((err) => console.error("Failed to fetch images:", err));

      if (!images || images.length === 0) {
        setHasMore(false);
      } else {
        setImages((prev) => [...prev, ...images]);
        setPage((prev) => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("first");
    console.log(images);
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
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <Image
            src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
            alt={item.tags.slice(0, 20)}
            width={248}
            height={248}
            sizes="(max-width: 768px) 100vw, 248px"
            style={{ objectFit: "cover", width: "100%" }}
            loading="eager"
          />
        </ImageListItem>
      ))}

      <div ref={loaderRef} style={{ height: "50px" }} />

      {loading && <p>جاري التحميل...</p>}
      {!hasMore && <p>لا توجد صور أخرى</p>}
    </div>
  );
}
