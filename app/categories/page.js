import Image from "next/image";
import getNews from "@/lib/categoryAPI";

import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  Paper,
  Container,
} from "@mui/material";

export default async function CategoriesPage() {
  const categories = [
    {
      id: "politics",
      name: "سياسة",
      query: "سياسة",
      color: "#3b82f6",
      icon: "🏛",
    },
    {
      id: "economy",
      name: "اقتصاد",
      query: "اقتصاد",
      color: "#10b981",
      icon: "💰",
    },
    {
      id: "sports",
      name: "رياضة",
      query: "رياضة",
      color: "#ef4444",
      icon: "⚽",
    },
    {
      id: "tech",
      name: "تقنية",
      query: "تكنولوجيا",
      color: "#6366f1",
      icon: "💻",
    },
    {
      id: "ai",
      name: "ذكاء اصطناعي",
      query: "ذكاء اصطناعي",
      color: "#8b5cf6",
      icon: "🤖",
    },
    {
      id: "health",
      name: "صحة",
      query: "صحة",
      color: "#14b8a6",
      icon: "🏥",
    },
    {
      id: "science",
      name: "علوم",
      query: "علوم",
      color: "#0ea5e9",
      icon: "🧬",
    },
    {
      id: "culture",
      name: "ثقافة",
      query: "ثقافة",
      color: "#f59e0b",
      icon: "🎭",
    },
    {
      id: "world",
      name: "عالم",
      query: "العالم",
      color: "#64748b",
      icon: "🌍",
    },
    {
      id: "middle-east",
      name: "الشرق الأوسط",
      query: "الشرق الأوسط",
      color: "#f97316",
      icon: "🌏",
    },
    {
      id: "egypt",
      name: "مصر",
      query: "مصر",
      color: "#059669",
      icon: "🇪🇬",
    },
    {
      id: "environment",
      name: "بيئة",
      query: "البيئة",
      color: "#22c55e",
      icon: "🌱",
    },
    {
      id: "education",
      name: "تعليم",
      query: "التعليم",
      color: "#eab308",
      icon: "🎓",
    },
    {
      id: "general",
      name: "منوعات",
      query: "أخبار",
      color: "#94a3b8",
      icon: "📰",
    },
  ];

  const data = await Promise.all(categories.map((cat) => getNews(cat.query)));

  console.log(data);

  return (
    <Box
      sx={{ p: 3, mt: "150px", "& > *+*": { mt: 5 } }}
      className="mx-2 md:mx-10 lg:mx-30"
    >
      {categories.map((cat, index) => {
        const articles = data[index];

        return (
          <Box key={cat.id} sx={{ mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: cat.color,
                    width: 40,
                    height: 40,
                    fontSize: 20,
                    boxShadow: 1,
                  }}
                >
                  {cat.icon}
                </Avatar>

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: cat.color, lineHeight: 1.2 }}
                  >
                    {cat.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    أحدث الأخبار في {cat.name}
                  </Typography>
                </Box>
              </Box>

              <Box
                href={`/category/${cat.id}`}
                sx={{
                  color: cat.color,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  transition: "opacity .2s",
                }}
              >
                المزيد ←
              </Box>
            </Box>

            <Grid container spacing={2}>
              {articles[0] && (
                <Grid size={{ xs: 12, md: 8 }}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 2,
                      transition: "box-shadow .2s",
                      "&:hover": { boxShadow: 6 },
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 400,
                        overflow: "hidden",
                        "& img": {
                          transition: "transform .5s",
                        },
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Image
                        src={articles[0].urlToImage || "/fallback.jpg"}
                        alt={articles[0].title}
                        fill
                        style={{ objectFit: "cover" }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          p: 2,
                          color: "white",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            fontWeight: "bold",
                          }}
                        >
                          {articles[0].title}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          mb: 1,
                        }}
                      >
                        {articles[0].description}
                      </Typography>

                      <Typography variant="caption" color="text.disabled">
                        {new Date(articles[0].publishedAt).toLocaleString(
                          "ar-EG",
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )}

              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    height: "100%",
                  }}
                >
                  {articles.slice(1, 4).map((article, i) => (
                    <Paper
                      key={article.url || i}
                      elevation={1}
                      sx={{
                        p: 0,
                        borderRadius: 5,
                        cursor: "pointer",
                        transition: "box-shadow .2s",
                        "&:hover": { boxShadow: 3 },
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: 100,
                          mb: 1,
                          borderRadius: 5,
                        }}
                      >
                        <Image
                          src={article.urlToImage || "/fallback.jpg"}
                          alt={article.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{
                          p: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          "&:hover": { color: "primary.main" },
                          transition: "color .2s",
                        }}
                      >
                        {article.title}
                      </Typography>

                      <Container
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          {new Date(article.publishedAt).toLocaleString(
                            "ar-EG",
                          )}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.Primary"
                          sx={{ mt: 1 }}
                        >
                          اقراء المزيد ←
                        </Typography>
                      </Container>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}
