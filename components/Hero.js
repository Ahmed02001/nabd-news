import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Hero({ article }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          position: "relative",
          height: 400,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Image
          src={article.urlToImage || "/no-image.png"}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
        {article.title}
      </Typography>

      <Button
        href={article.url}
        target="_blank"
        sx={{ mt: 2 }}
        variant="contained"
        color="primary"
      >
        اقرأ المزيد
      </Button>
    </Box>
  );
}
