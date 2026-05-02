"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  Avatar,
  Chip,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Scroll-reveal hook ──────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── Reveal wrapper ──────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const { ref, visible } = useReveal();
  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .75s ${delay}s, transform .75s ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

// ── Section tag ─────────────────────────────────────────────────
function SectionTag({ children, center = false }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        gap: 1.5,
        mb: 2,
        "&::before": {
          content: '""',
          width: 20,
          height: 1,
          bgcolor: "primary.main",
          display: "block",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: "primary.main",
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ── Gold divider ────────────────────────────────────────────────
function GoldDivider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 1,
        background: (t) =>
          `linear-gradient(to left, transparent, ${t.palette.primary.main}, transparent)`,
        opacity: 0.3,
      }}
    />
  );
}

// ── DATA ────────────────────────────────────────────────────────
const STATS = [
  { num: "١٤", label: "تصنيفاً إخبارياً" },
  { num: "٢٤/٧", label: "تغطية مستمرة" },
  { num: "١٢٠+", label: "ألف قارئ يومياً" },
  { num: "٢٠٢٤", label: "عام التأسيس" },
];

const VALUES = [
  {
    num: "٠١",
    icon: "⚡",
    name: "السرعة",
    desc: "نصل إليك بالخبر في لحظة حدوثه. تقنية الجمع الآلي من مصادر متعددة تضمن أن لا خبر مهم يغيب عن رادارنا.",
  },
  {
    num: "٠٢",
    icon: "🎯",
    name: "الدقة",
    desc: "كل خبر يمر بمنظومة تحقق متعددة المراحل قبل وصوله إليك. الدقة ليست خياراً — هي التزام أساسي لا نتنازل عنه.",
  },
  {
    num: "٠٣",
    icon: "🌍",
    name: "الشمولية",
    desc: "١٤ تصنيفاً يُغطي كل ما يهمك: من السياسة إلى الذكاء الاصطناعي، ومن الرياضة إلى البيئة — في مكان واحد.",
  },
  {
    num: "٠٤",
    icon: "🔓",
    name: "الشفافية",
    desc: "نذكر مصدر كل خبر بوضوح. القارئ يستحق أن يعرف من أين تأتي المعلومة وأن يحكم بنفسه على مصداقيتها.",
  },
  {
    num: "٠٥",
    icon: "🤖",
    name: "التقنية",
    desc: "نستثمر أحدث تقنيات الذكاء الاصطناعي لجمع الأخبار وتصنيفها وتقديمها — لا لاستبدال الصحافة بل لتعزيزها.",
  },
  {
    num: "٠٦",
    icon: "💬",
    name: "المجتمع",
    desc: "القارئ ليس مستقبلاً سلبياً. نبني مساحة حوار حقيقية تُمكّن الجمهور العربي من التفاعل مع الأحداث والتعبير عن رأيه.",
  },
];

const TEAM = [
  {
    emoji: "👨‍💼",
    name: "أحمد حمدى",
    role: "المدير التنفيذي",
    bio: "٢٠ عاماً في الصحافة الرقمية. يقود رؤية نبض نحو مستقبل إعلام عربي موثوق وحديث.",
  },
  {
    emoji: "👩‍💻",
    name: "سارة العمري",
    role: "رئيسة التحرير",
    bio: "محررة متمرسة بخبرة في الشؤون السياسية والاقتصادية. تحرص على معايير الدقة في كل خبر.",
  },
  {
    emoji: "👨‍🔬",
    name: "تميم الفارسي",
    role: "مدير التقنية",
    bio: "مهندس برمجيات متخصص في الأنظمة الإخبارية والذكاء الاصطناعي. بنى البنية التقنية لنبض من الصفر.",
  },
  {
    emoji: "👩‍🎨",
    name: "لمى العيسى",
    role: "مديرة التصميم",
    bio: "مصممة UX تؤمن أن التجربة البصرية هي جزء لا يتجزأ من الصحافة الجيدة.",
  },
];

const TIMELINE = [
  {
    year: "٢٠٢٤",
    title: "انطلاق نبض",
    body: "ولد نبض من فكرة بسيطة: القارئ العربي يستحق مصدراً إخبارياً يجمع المصداقية والسرعة. أطلقنا النسخة الأولى بـ ٥ تصنيفات و١٠٠٠ مستخدم.",
  },
  {
    year: "٢٠٢٤",
    title: "توسع التصنيفات",
    body: "أضفنا ٩ تصنيفات جديدة وطورنا محرك الجمع الآلي ليشمل أكثر من ٥٠ مصدراً إخبارياً موثوقاً حول العالم.",
  },
  {
    year: "٢٠٢٥",
    title: "١٠٠ ألف قارئ",
    body: "تخطينا حاجز ١٠٠ ألف قارئ يومي نشط وأطلقنا تطبيق الجوال مع ميزة الإشعارات الفورية للأخبار العاجلة.",
  },
  {
    year: "٢٠٢٦",
    title: "اليوم — والمستقبل",
    body: "نبض اليوم أكبر وأقوى، ونعمل على تطوير أدوات تحليل مدعومة بالذكاء الاصطناعي ونسخة مخصصة لكل قارئ.",
  },
];

// ══════════════════════════════════════════════════════════════════
export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const red = theme.palette.primary.main; // #E63946
  const navy = theme.palette.secondary.main; // #1D3557
  const bg = theme.palette.background.default;
  const paper = theme.palette.background.paper;

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        direction: "rtl",
        fontFamily: "Cairo, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          pt: "100px",
          pb: 10,
          bgcolor: isDark ? "#0F172A" : navy,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(230,57,70,0.07) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(230,57,70,0.07) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 70% 60% at 50% 40%, rgba(230,57,70,0.15) 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 15% 80%, rgba(29,53,87,0.3) 0%, transparent 60%)
            `,
            pointerEvents: "none",
            animation: "breathe 8s ease-in-out infinite alternate",
            "@keyframes breathe": {
              from: { opacity: 0.6, transform: "scale(1)" },
              to: { opacity: 1, transform: "scale(1.04)" },
            },
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 860, px: 3 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3.5,
              opacity: 0,
              animation: "fadeUp .8s .2s forwards",
              "@keyframes fadeUp": {
                from: { opacity: 0, transform: "translateY(24px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
              "&::before, &::after": {
                content: '""',
                width: 32,
                height: 1,
                bgcolor: red,
                opacity: 0.7,
                display: "block",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: red,
                textTransform: "uppercase",
              }}
            >
              من نحن
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "Cairo, sans-serif",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 900,
              lineHeight: 1,
              mb: 1.5,
              opacity: 0,
              animation: "fadeUp .9s .35s forwards",
              color: "#fff",
            }}
          >
            <Box sx={{ color: red }}>نبض</Box>
            <br />
            <Box
              sx={{
                WebkitTextStroke: `2px ${red}`,
                color: "transparent",
              }}
            >
              الخبر
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: "clamp(15px, 2.5vw, 20px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: 540,
              mx: "auto",
              mt: 3,
              mb: 6,
              opacity: 0,
              animation: "fadeUp .9s .5s forwards",
            }}
          >
            منصة إخبارية عربية تؤمن بأن الحقيقة تستحق أن تُروى — بوضوح، بسرعة،
            وبلا مجاملة
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 3, md: 6 },
              flexWrap: "wrap",
              opacity: 0,
              animation: "fadeUp .9s .65s forwards",
            }}
          >
            {STATS.map((s, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: { xs: 3, md: 6 },
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontFamily: "Cairo",
                      fontSize: 38,
                      fontWeight: 900,
                      color: red,
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.08em",
                      mt: 0.5,
                    }}
                  >
                    {s.label}
                  </Typography>
                </Box>
                {i < STATS.length - 1 && (
                  <Box
                    sx={{
                      width: 1,
                      bgcolor: "rgba(230,57,70,0.25)",
                      alignSelf: "stretch",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            opacity: 0,
            animation: "fadeUp .8s 1.3s forwards",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            مرر للأسفل
          </Typography>
          <Box
            sx={{
              width: 1,
              height: 48,
              background: `linear-gradient(to bottom, ${red}, transparent)`,
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%,100%": { opacity: 0.3 },
                "50%": { opacity: 1 },
              },
            }}
          />
        </Box>
      </Box>

      <GoldDivider />

      <Box sx={{ py: 15, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal>
                <SectionTag>رسالتنا</SectionTag>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Cairo",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    mb: 3,
                  }}
                >
                  نُوصل إليك{" "}
                  <Box
                    sx={{
                      fontStyle: "normal",
                      color: "primary.main",
                      borderBottom: `1px solid`,
                      borderColor: "primary.main",
                      pb: 0.2,
                    }}
                  >
                    نبض
                  </Box>{" "}
                  العالم في لحظته الأولى
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    lineHeight: 2,
                    color: "text.secondary",
                    fontWeight: 300,
                    mb: 2,
                  }}
                >
                  نبض ليس مجرد موقع إخباري — هو تجربة معلوماتية مصمّمة بعناية
                  لتمنح القارئ العربي ما يحتاجه فعلاً: سرعة في التوصيل، وعمق في
                  التحليل، وأمانة في النقل.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    lineHeight: 2,
                    color: "text.secondary",
                    fontWeight: 300,
                  }}
                >
                  نؤمن أن القارئ العربي يستحق أخباراً موثوقة تُقدَّم بأسلوب
                  يحترم ذكاءه، بعيداً عن الإثارة الفارغة والتضليل المتعمّد.
                </Typography>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Reveal delay={0.15}>
                <Card
                  elevation={0}
                  sx={{
                    p: 5,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    position: "relative",
                    overflow: "visible",
                    bgcolor: "background.paper",
                    "&::before": {
                      content: '"💥"',
                      fontFamily: "Cairo",
                      fontSize: 130,
                      color: "primary.main",
                      opacity: 0.1,
                      position: "absolute",
                      top: -16,
                      right: 16,
                      lineHeight: 1,
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cairo",
                      fontSize: 22,
                      lineHeight: 1.75,
                      color: "text.primary",
                      fontWeight: 400,
                    }}
                  >
                    الصحافة الجيدة ليست رفاهية — هي ضرورة لكل مجتمع يريد أن يفهم
                    نفسه والعالم من حوله
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      mt: 2.5,
                      fontSize: 11,
                      fontStyle: "normal",
                      letterSpacing: "0.12em",
                      color: "primary.main",
                      textTransform: "uppercase",
                    }}
                  >
                    — فريق نبض التحريري
                  </Typography>
                </Card>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <GoldDivider />

      <Box sx={{ py: 15, bgcolor: isDark ? "#0a0f1e" : "#f1f5f9" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 9 }}>
              <SectionTag center>مبادؤنا</SectionTag>
              <Typography
                variant="h2"
                sx={{ fontFamily: "Cairo", fontWeight: 800, mt: 1 }}
              >
                ما يُميّزنا
              </Typography>
            </Box>
          </Reveal>

          <Reveal delay={0.1}>
            <Grid
              container
              spacing={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {VALUES.map((v, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 5,
                      height: "100%",
                      borderRadius: 0,
                      borderLeft: i % 3 !== 0 ? "1px solid" : "none",
                      borderBottom: i < 3 ? "1px solid" : "none",
                      borderColor: "divider",
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "hidden",
                      transition: "bgcolor .25s",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        bgcolor: "primary.main",
                        transform: "scaleX(0)",
                        transition: "transform .3s",
                        transformOrigin: "right",
                      },
                      "&:hover": {
                        bgcolor: isDark
                          ? "rgba(230,57,70,0.04)"
                          : "rgba(230,57,70,0.02)",
                      },
                      "&:hover::after": { transform: "scaleX(1)" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Cairo",
                        fontSize: 60,
                        color: "primary.main",
                        opacity: 0.1,
                        lineHeight: 1,
                        mb: 0.5,
                        fontWeight: 900,
                      }}
                    >
                      {v.num}
                    </Typography>
                    <Typography sx={{ fontSize: 28, mb: 1.5 }}>
                      {v.icon}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Cairo",
                        fontSize: 22,
                        color: "primary.main",
                        fontWeight: 700,
                        mb: 1.5,
                      }}
                    >
                      {v.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "text.secondary",
                        fontWeight: 300,
                      }}
                    >
                      {v.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Reveal>
        </Container>
      </Box>

      <GoldDivider />

      <Box sx={{ py: 15, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 9 }}>
              <SectionTag center>الفريق</SectionTag>
              <Typography
                variant="h2"
                sx={{ fontFamily: "Cairo", fontWeight: 800, mt: 1 }}
              >
                من يصنع نبض
              </Typography>
            </Box>
          </Reveal>

          <Grid container spacing={3}>
            {TEAM.map((m, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Reveal delay={i * 0.1}>
                  <Card
                    elevation={0}
                    sx={{
                      textAlign: "center",
                      p: 4,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color .25s, transform .25s",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(ellipse 100% 100% at 50% 0%, ${red}10, transparent 70%)`,
                        opacity: 0,
                        transition: "opacity .3s",
                      },
                      "&:hover": {
                        borderColor: red,
                        transform: "translateY(-5px)",
                      },
                      "&:hover::before": { opacity: 1 },
                      bgcolor: "background.paper",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 72,
                        height: 72,
                        mx: "auto",
                        mb: 2,
                        fontSize: 30,
                        bgcolor: isDark
                          ? "rgba(230,57,70,0.1)"
                          : "rgba(230,57,70,0.08)",
                        border: "2px solid",
                        borderColor: "divider",
                        transition: "border-color .25s",
                        ".MuiCard-root:hover &": { borderColor: red },
                      }}
                    >
                      {m.emoji}
                    </Avatar>
                    <Typography
                      sx={{
                        fontFamily: "Cairo",
                        fontSize: 19,
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      {m.name}
                    </Typography>
                    <Chip
                      label={m.role}
                      size="small"
                      sx={{
                        bgcolor: isDark
                          ? "rgba(230,57,70,0.12)"
                          : "rgba(230,57,70,0.08)",
                        color: "primary.main",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        mb: 2,
                        height: 22,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: 13,
                        lineHeight: 1.8,
                        color: "text.secondary",
                        fontWeight: 300,
                      }}
                    >
                      {m.bio}
                    </Typography>
                  </Card>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <GoldDivider />

      <Box sx={{ py: 15, bgcolor: isDark ? "#080d1a" : "#f8fafc" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 10 }}>
              <SectionTag center>مسيرتنا</SectionTag>
              <Typography
                variant="h2"
                sx={{ fontFamily: "Cairo", fontWeight: 800, mt: 1 }}
              >
                قصة نبض
              </Typography>
            </Box>
          </Reveal>

          <Box sx={{ maxWidth: 780, mx: "auto", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "50%",
                width: 1,
                background: `linear-gradient(to bottom, transparent, ${red}55 10%, ${red}55 90%, transparent)`,
                display: { xs: "none", md: "block" },
              }}
            />

            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 2, md: 6 },
                    mb: 7,
                    flexDirection: {
                      xs: "column",
                      md: i % 2 === 0 ? "row" : "row-reverse",
                    },
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cairo",
                      fontSize: 32,
                      fontWeight: 900,
                      color: "primary.main",
                      minWidth: 84,
                      textAlign: "center",
                      lineHeight: 1,
                      pt: 0.5,
                    }}
                  >
                    {t.year}
                  </Typography>

                  <Box
                    sx={{
                      position: { xs: "static", md: "absolute" },
                      right: { md: "calc(50% - 8px)" },
                      top: 6,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      border: `3px solid`,
                      borderColor: isDark ? "#080d1a" : "#f8fafc",
                      boxShadow: `0 0 0 1px ${red}`,
                      display: { xs: "none", md: "block" },
                      flexShrink: 0,
                    }}
                  />

                  <Card
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: 3.5,
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Cairo",
                        fontSize: 20,
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {t.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "text.secondary",
                        fontWeight: 300,
                      }}
                    >
                      {t.body}
                    </Typography>
                  </Card>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      <GoldDivider />

      <Box
        sx={{
          py: 18,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          bgcolor: isDark ? navy : "#1D3557",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${red}15, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <Typography
              sx={{
                fontSize: 10,
                letterSpacing: "0.2em",
                color: red,
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              ابدأ الآن
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Cairo",
                fontWeight: 900,
                lineHeight: 1.25,
                mb: 3,
                color: "#fff",
              }}
            >
              كن جزءاً من <Box sx={{ color: red }}>نبض</Box> العالم
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
                lineHeight: 1.85,
                mb: 6,
              }}
            >
              انضم إلى أكثر من ١٢٠ ألف قارئ يثقون بنبض مصدراً لمتابعة الأحداث
              يومياً
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                href="/"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontFamily: "Cairo",
                  fontWeight: 700,
                  px: 5,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: 15,
                }}
              >
                استكشف الأخبار
              </Button>
              <Button
                href="/contact"
                variant="outlined"
                size="large"
                sx={{
                  fontFamily: "Cairo",
                  fontWeight: 600,
                  px: 5,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: 15,
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.25)",
                  "&:hover": {
                    borderColor: red,
                    color: red,
                    bgcolor: "transparent",
                  },
                }}
              >
                تواصل معنا
              </Button>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
