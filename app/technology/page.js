"use client";

import { useEffect, useState } from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Trending from "@/components/Trending";
import Grid from "@mui/material/Grid";
import LatestNewsCard from "@/components/LatestNewsCard";
import getNews from "@/lib/categoryAPI";
import NewsList from "@/components/NewsList";

export default function Page() {
  const techCategories = [
    "الذكاء الاصطناعي",
    "تطوير الويب",
    "تطوير الموبايل",
    "الحوسبة السحابية",
    "الأمن السيبراني",
    "علوم البيانات",
    "البيانات الضخمة",
    "ديف أوبس",
    "تطوير البرمجيات",
    "البلوك تشين",
    "إنترنت الأشياء",
    "تطوير الألعاب",
  ];

  const [articles, setArticles] = useState([]);
  const [companies, setcompanies] = useState([]);
  const [query, setQuery] = useState("تكنولوجيا");
  useEffect(() => {
    getNews(query).then((res) => {
      if (query == "تكنولوجيا") {
        setcompanies(res);
        setArticles(res);
      } else {
        setArticles(res);
      }
    });
  }, [query]);

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        mt: 20,
      }}
    >
      <Container
        disableGutters
        className="col-span-3  lg:col-span-2 mx-2 md:mx-10 lg:mx-30"
      >
        {articles[0] && <Hero article={articles[0]} />}

        <Box
          sx={{
            width: "100%",
            py: 1,
            position: "sticky",
            top: "135px",
            left: " 50%",
            zIndex: 50,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: "100%",
              px: 2,
              overflowX: "scroll",
              scrollbarWidth: "none",
              overflowStyle: "none",
            }}
          >
            <Categories categories={techCategories} onSelect={setQuery} />
          </Stack>
        </Box>
        <Typography
          variant="h5"
          sx={{
            width: "150px",
            mt: 4,
            mb: 4,
            pb: 1,
            textDecoration: "none",
            borderBottom: "1px solid #E63946",
            color: "text.primary",
            transition: "1",
            "&:hover": {
              color: "primary.main",
            },
            fontWeight: "700",
          }}
        >
          أخر الأخبار
        </Typography>

        <Grid container spacing={3}>
          <NewsList initialArticles={articles} query={query} />
          {/* {articles.slice(1, 7).map((article, i) => (
            <Grid xs={12} sm={6} md={4} key={i}>
              <NewsCard article={article} />
            </Grid>
          ))} */}
        </Grid>

        <Trending />
      </Container>
      <Container
        disableGutters
        className="col-span-3 md:col-span-1 min-w-90.5"
        sx={{
          p: 2,
          boxShadow: "0px 0px 3px #E63946",
          borderRadius: "10px",
          height: "fit-content",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "150px",
            mb: 3,
            pb: 1,
            textDecoration: "none",
            borderBottom: "1px solid #E63946",
            color: "text.primary",
            transition: "1",
            "&:hover": {
              color: "primary.main",
            },
            fontWeight: "700",
          }}
        >
          أحدث الأخبار
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {companies.slice(1, 7).map((article, i) => (
            <Grid key={i}>
              <LatestNewsCard article={article} />
            </Grid>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
