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

    console.log(category);
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
        px: {
          sm: 1,
          md: 5,
          lg: 15,
        },
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
                console.log(categories.get(key));
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
          {images?.map((item) => (
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
