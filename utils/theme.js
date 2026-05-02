import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode,
      primary: {
        main: "#E63946",
      },
      secondary: {
        main: "#1D3557",
      },
      background: {
        default: mode === "light" ? "#F9FAFB" : "#0F172A",
        paper: mode === "light" ? "#FFFFFF" : "#1E293B",
      },
      text: {
        primary: mode === "light" ? "#111827" : "#F9FAFB",
        secondary: mode === "light" ? "#6B7280" : "#9CA3AF",
      },
      divider: mode === "light" ? "#E5E7EB" : "#334155",
    },
    typography: {
      fontFamily: "Cairo, sans-serif",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "inherit",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  });
