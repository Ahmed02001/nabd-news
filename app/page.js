import { Container, Box, Typography } from "@mui/material";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import NewsCard from "@/components/NewsCard";
import Trending from "@/components/Trending";
import Grid from "@mui/material/Grid";
import LatestNewsCard from "@/components/LatestNewsCard";
import getNews from "@/lib/categoryAPI";

export default async function Home() {
  const companyNews = await getNews("شركات");

  const articles = await getNews("مصر");

  const categories = ["مصر", "تكنولوجيا", "رياضة", "اقتصاد"];

  return (
    <Container
      sx={{
        px: "25px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        mt: 20,
      }}
    >
      <Container
        disableGutters
        className="col-span-3  xl:col-span-2 mx-2 md:mx-10 lg:mx-30"
      >
        {articles[0] && <Hero article={articles[0]} />}

        <Categories categories={categories} link={true} />

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
          أحدث الأخبار
        </Typography>

        <Grid container spacing={3}>
          {articles.slice(1, 7).map((article, i) => (
            <Grid xs={12} sm={6} md={4} key={i} sx={{ width: "100%" }}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>

        <Trending />
      </Container>
      <Container
        disableGutters
        className="col-span-3  xl:col-span-1"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "column" },
          gap: 4,
        }}
      >
        <Container
          disableGutters
          sx={{
            p: 2,
            boxShadow: "0px 0px 3px #E63946",
            borderRadius: "10px",
            height: "fit-content",
            width: "100%",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {articles.slice(1, 7).map((article, i) => (
              <Grid key={i}>
                <LatestNewsCard article={article} />
              </Grid>
            ))}
          </Box>
        </Container>
        <Container
          disableGutters
          sx={{
            p: 2,
            boxShadow: "0px 0px 3px #E63946",
            borderRadius: "10px",
            height: "fit-content",
            // minWidth: "410px",
            width: "100%",
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
            أخبار الشركات
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {companyNews.slice(1, 7).map((article, i) => (
              <Grid key={i}>
                <LatestNewsCard article={article} />
              </Grid>
            ))}
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
