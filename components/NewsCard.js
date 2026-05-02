import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Stack,
  Button,
} from "@mui/material";

export default function NewsCard({ article }) {
  return (
    <Card sx={{ borderRadius: 3, mt: 2 }}>
      <CardMedia
        loading="eager"
        component="img"
        height="180"
        image={article.urlToImage || "/no-image.png"}
        alt={article.title}
      />

      <CardContent sx={{ "&:last-child": { paddingBottom: 0 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {article.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>

        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#fd161d", fontWeight: 600 }}
          >
            {article.source.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {new Date(article.publishedAt).toLocaleString("ar-EG")}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", justifyContent: "left", mt: 2 }}
        >
          <Button onClick={article.url} sx={{ fontWeight: 600 }}>
            إقراء المزيد ⇽
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
