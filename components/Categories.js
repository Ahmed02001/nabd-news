"use client";

import { Box, Button } from "@mui/material";

export default function Categories({ categories, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "nowrap",
        fontWeight: 600,
      }}
    >
      {categories.map((cat) => (
        <Box
          key={cat}
          onClick={() => onSelect(cat)}
          variant="outlined"
          sx={{
            px: 3,
            py: 0.5,
            bgcolor: "#eee",
            fontWeight: 600,
            color: "#fc1522",
            textAlign: "center",
            borderRadius: 2,
            boxShadow: 1.5,
            cursor: "pointer",
            border: "1px solid #fc1522",
            width: "130px",
          }}
        >
          {cat}
        </Box>
      ))}
    </Box>
  );
}
