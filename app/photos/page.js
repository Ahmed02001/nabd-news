"use client";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { getImages } from "@/lib/imagesAPI";
import NewImages from "@/components/NewImages";
import { useEffect, useState } from "react";

export default function MasonryImageList() {
  const [category, setCategory] = useState("flowers");
  const [images, setImages] = useState([]);
  const isSmall = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (!category.trim()) return;

    getImages(category)
      .then((res) => setImages(res))
      .catch((err) => console.error("Failed to fetch images:", err));
  }, [category]);

  const categories = new Map([
    ["خلفيات", "backgrounds"],
    ["موضة", "fashion"],
    ["طبيعة", "nature"],
    ["علوم", "science"],
    ["تعليم", "education"],
    ["مشاعر", "feelings"],
    ["صحة", "health"],
    ["أشخاص", "people"],
    ["دين", "religion"],
    ["أماكن", "places"],
    ["حيوانات", "animals"],
    ["صناعة", "industry"],
    ["كمبيوتر", "computer"],
    ["طعام", "food"],
    ["رياضة", "sports"],
    ["مواصلات", "transportation"],
    ["سفر", "travel"],
    ["مباني", "buildings"],
    ["أعمال", "business"],
    ["موسيقى", "music"],
  ]);
  return (
    <Container
      sx={{
        m: 0,
        mt: "125px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          py: 2,
          position: "sticky",
          top: "125px",
          left: " 50%",
          zIndex: 50,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            bgColor: "text-primary",
            width: "100%",
            overflowX: "scroll",
            scrollbarWidth: "none",
            overflowStyle: "none",
          }}
        >
          {[...categories.keys()].map((key) => (
            <Box
              key={key}
              onClick={() => {
                setCategory(categories.get(key));
              }}
              sx={{
                px: 3,
                py: 0.5,
                bgcolor: "#eee",
                fontWeight: 600,
                color: "#fc1522",
                borderRadius: 2,
                boxShadow: 1.5,
                cursor: "pointer",
                border: "1px solid #fc1522",
              }}
            >
              {key}
            </Box>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 2,
        }}
      >
        <ImageList variant="masonry" cols={isSmall ? 2 : 3} gap={10}>
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <Image
                src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                alt={item.tags.slice(0, 20)}
                width={248}
                height={248}
                sizes="(max-width: 768px) 100vw, 248px"
                style={{ objectFit: "cover", width: "100%" }}
                loading="eager"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}
