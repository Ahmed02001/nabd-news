"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        pt: 8,
        pb: 4,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        {/* 🔥 TOP GRID */}
        <Grid container spacing={4}>
          {/* 📰 BRAND */}
          <Grid xs={12} md={4}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                color: "primary.main",
                mb: 1,
              }}
            >
              نبض
            </Typography>

            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              منصة إخبارية عربية تقدم لك أهم الأخبار لحظة بلحظة من مصادر موثوقة،
              مع تجربة قراءة حديثة وسريعة.
            </Typography>

            {/* 🌐 SOCIAL */}
            <Box mt={2}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TelegramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* 🔗 LINKS */}
          <Grid xs={6} md={2}>
            <Typography fontWeight={700} mb={2}>
              روابط
            </Typography>

            {["الرئيسية", "التصنيفات", "من نحن", "تواصل"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* 🧭 CATEGORIES */}
          <Grid xs={6} md={3}>
            <Typography fontWeight={700} mb={2}>
              التصنيفات
            </Typography>

            {["سياسة", "اقتصاد", "رياضة", "تقنية", "صحة"].map((cat) => (
              <Link
                key={cat}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {cat}
              </Link>
            ))}
          </Grid>

          {/* 📩 NEWSLETTER */}
          <Grid xs={12} md={3}>
            <Typography fontWeight={700} mb={2}>
              اشترك في النشرة
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              احصل على أهم الأخبار مباشرة إلى بريدك الإلكتروني
            </Typography>

            <Box display="flex" gap={1}>
              <TextField
                size="small"
                placeholder="بريدك الإلكتروني"
                fullWidth
              />
              <Button variant="contained">اشتراك</Button>
            </Box>
          </Grid>
        </Grid>

        {/* 🔻 DIVIDER */}
        <Divider sx={{ my: 4 }} />

        {/* ⚡ BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 نبض — جميع الحقوق محفوظة
          </Typography>

          <Box display="flex" gap={2}>
            <Link href="#" underline="hover" color="text.secondary">
              سياسة الخصوصية
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              الشروط
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
