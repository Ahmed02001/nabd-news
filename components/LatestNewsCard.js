"use client";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Container,
} from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";

export default function LatestNewsCard({ article }) {
  const { author, description, publishedAt, title, url, urlToImage } = article;

  dayjs.extend(relativeTime);
  dayjs.locale("ar");

  return (
    <>
      <Card sx={{ display: "flex", height: 110 }}>
        <Link href={url}>
          <CardMedia
            component="img"
            image={urlToImage}
            sx={{
              width: 150,
              height: 110,
              fontWeight: "500",
              fontSize: "14px",
            }}
            title={title}
          />
        </Link>

        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
        >
          <CardContent sx={{ pb: 0, pt: 1 }}>
            <Typography
              variant="h6"
              color="text-primary"
              sx={{ fontWeight: "700", fontSize: "14px", mb: 1 }}
            >
              <Link href={url}>
                {title.length > 60 ? title.slice(0, 60) + "..." : title}
              </Link>
            </Typography>
            <Typography
              variant="p"
              color="text-primary"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              <Box>{author}</Box>
              <Box>{dayjs(article.publishedAt).fromNow()}</Box>
            </Typography>
          </CardContent>
          <CardActions
            sx={{ p: 0, display: "flex", justifyContent: "end", mb: 1, ml: 1 }}
          >
            <Button size="small">
              <Link href={url}>إقراء المزيد</Link>
            </Button>
          </CardActions>
        </Container>
      </Card>
    </>
  );
}
