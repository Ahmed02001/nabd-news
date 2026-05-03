"use client";

import Image from "next/image";
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
  Stack,
} from "@mui/material";

import { motion } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 12,
        pt: 10,
        pb: 5,
        bgcolor: "#020617",
        color: "#fff",
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image src="/light-logo.png" alt="نبض" width={150} height={60} />

              <Typography
                sx={{
                  mt: 2,
                  color: "#94a3b8",
                  lineHeight: 1.9,
                  fontSize: 14,
                }}
              >
                منصة إخبارية عربية تقدم أحدث الأخبار لحظة بلحظة من مصادر موثوقة،
                مع تجربة استخدام سريعة وحديثة.
              </Typography>

              <Box sx={{ my: 2 }}>
                {[FacebookIcon, TwitterIcon, InstagramIcon, TelegramIcon].map(
                  (Icon, i) => (
                    <IconButton
                      key={i}
                      sx={{
                        color: "#fff",
                        bgcolor: "rgba(255,255,255,0.05)",
                        mr: 1,
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "primary.main",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  ),
                )}
              </Box>
            </motion.div>
          </Grid>

          <Grid xs={6} md={2}>
            <Typography fontWeight={700} mb={2}>
              روابط
            </Typography>

            {["الرئيسية", "الأخبار", "من نحن", "تواصل"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  mb: 1.2,
                  color: "#94a3b8",
                  fontSize: 14,
                  transition: "0.3s",
                  "&:hover": {
                    color: "#fff",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          <Grid xs={12} md={2}>
            <Typography fontWeight={700} mb={2}>
              🔥 الأكثر تداولًا
            </Typography>

            {[
              "الذكاء الاصطناعي",
              "الاقتصاد العالمي",
              "الدوري الإنجليزي",
              "أسعار الذهب",
            ].map((trend) => (
              <Link
                key={trend}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  mb: 1.2,
                  color: "#94a3b8",
                  fontSize: 14,
                  "&:hover": { color: "primary.main" },
                }}
              >
                {trend}
              </Link>
            ))}
          </Grid>

          <Grid xs={12} md={3}>
            <Typography fontWeight={700} mb={2}>
              اشترك الآن
            </Typography>

            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 2 }}>
              اشترك ليصلك أهم الأخبار مباشرة
            </Typography>

            <Box display="flex" gap={1}>
              <TextField
                size="small"
                placeholder="بريدك الإلكتروني"
                fullWidth
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              <Button variant="contained">اشتراك</Button>
            </Box>
          </Grid>
        </Grid>

        <Box mt={6}>
          <Typography sx={{ fontWeight: 700, m: 2 }}>📰 آخر الأخبار</Typography>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {[
              "ارتفاع أسعار النفط عالميًا",
              "تطورات الذكاء الاصطناعي في 2026",
              "مباريات قوية اليوم في الدوري",
            ].map((news, i) => (
              <Grid xs={12} md={4} key={i}>
                <Box
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "rgba(255,255,255,0.03)",
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  <Typography fontSize={14}>{news}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            © 2026 نبض — جميع الحقوق محفوظة
          </Typography>

          <Box display="flex" gap={3}>
            <Link href="#" sx={{ color: "#94a3b8" }}>
              الخصوصية
            </Link>
            <Link href="#" sx={{ color: "#94a3b8" }}>
              الشروط
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
