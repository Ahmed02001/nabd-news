"use client";
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ mode, setMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "أحدث الأخبار", href: "/important-news" },
    { name: "العالم", href: "/world" },
    { name: "اقتصاد", href: "/economy" },
    { name: "الشرق الأوسط", href: "/middle-east" },
    { name: "الاقسام", href: "/categories" },
    { name: "شركات", href: "/companies" },
    { name: "صور", href: "/photos" },
    { name: "تكنولوجيا", href: "/technology" },
    { name: "ثقافة", href: "/culture" },
    { name: "التعليم", href: "/education" },
    { name: "الصحة", href: "/health" },
    { name: "البيئة", href: "/environment" },
  ];

  return (
    <>
      <AppBar
        className={cairo.className}
        elevation={2}
        sx={{
          pl: { xs: 4, md: 6 },
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar
          sx={{ p: 0, display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            onClick={toggleTheme}
            color="text.primary"
            sx={{ position: "absolute", top: "16px", right: "170px" }}
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <Typography variant="h6">
            <Link href="/">
              <Image
                src={mode === "dark" ? "/light-logo.png" : "/dark-logo.png"}
                alt="this is logo for web site"
                loading="eager"
                width={200}
                height={100}
              ></Image>
            </Link>
          </Typography>

          <Box sx={{ display: { md: "none", lg: "flex" } }}>
            {links.map((link) => (
              <Button
                key={link.name}
                color="text.primary"
                sx={{
                  color: "text.primary",
                  fontWeight: "700",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Link
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "text.primary",
                    fontWeight: "700",
                  }}
                >
                  {link.name}
                </Link>
              </Button>
            ))}
          </Box>

          <IconButton
            color="text.primary"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, p: 2, direction: "ltr" }}>
          {links.map((link) => (
            <Typography
              key={link.name}
              sx={{
                mb: 2,
                textDecoration: "none",
                color: "text.primary",
                fontWeight: "700",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <Link href={link.href}>{link.name}</Link>
            </Typography>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
