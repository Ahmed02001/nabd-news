import { Box, Typography } from "@mui/material";
import NewsCard from "@/components/NewsCard";
import getNews from "@/lib/categoryAPI";
import NewsList from "@/components/NewsList";

export default async function page() {
  const query = "العالم";
  const articles = await getNews(query);

  return (
    <Box sx={{ marginTop: "150px" }} className="mx-2 md:mx-10 lg:mx-30">
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textDecoration: "none",
          borderBottom: "1px solid primary.main",
          color: "text.primary",
          "&:hover": {
            color: "primary.main",
          },
          fontWeight: "700",
        }}
      >
        🔥 الأكثر قراءة
      </Typography>

      {/* {articles?.map((a, i) => (
        <NewsCard key={i} article={a} />
      ))} */}

      <NewsList initialArticles={articles} query={query} />
    </Box>
  );
}
