"use client";

import { Box, Button } from "@mui/material";

export default function Categories({ categories, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "nowrap",
      }}
    >
      {categories.map((cat) => (
        <Button key={cat} onClick={() => onSelect(cat)} variant="outlined">
          {cat}
        </Button>
      ))}
    </Box>
  );
}
