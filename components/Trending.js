"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Trending() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = "مصر";
    fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=popularity&language=ar&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []));
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        🔥 الأكثر قراءة
      </Typography>

      {articles.slice(0, 5).map((a, i) => (
        <Typography key={i} sx={{ mb: 1 }}>
          • {a.title}
        </Typography>
      ))}
    </Box>
  );
}
