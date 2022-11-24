import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: theme.fonts.sans,
  background: theme.colors.background,
  color: theme.colors.text.dimmed,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});
