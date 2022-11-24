import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
  },
  fonts: {
    sans: "Roboto, sans-serif",
    monospace: "Roboto Mono, monospace",
  },
  colors: {
    background: "#0C0C0C",
    lightBackground: "#131313",
    primary: "#00E3A9",
    blue: "#56A1FF",
    red: "#FF703B",
    grey: "rgba(169,169,169,0.4)",
    text: {
      normal: "#ffffff",
      dimmed: "#A9A9A9",
    },
  },
  fontSize: {
    extraSmall: "0.85rem",
    small: "1rem",
    medium: "1.25rem",
    large: "2.25rem",
  },
  lineHeight: {
    small: "1.5rem",
    medium: "1.75rem",
    large: "2.5rem",
  },
  borderRadius: "4px",
});
