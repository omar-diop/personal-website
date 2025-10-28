import { style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const hero = style({
  position: "relative",
  width: "100vw",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  height: "60vh",
  minHeight: "400px",
  maxHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "50vh",
      minHeight: "350px",
    },
  },
})

export const heroImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('/images/talks_banner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
})

export const heroOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to bottom, rgba(12, 12, 12, 0.7), rgba(12, 12, 12, 0.9))",
})

export const heroContent = style({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: "800px",
  padding: `0 ${theme.space.large}`,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `0 ${theme.space.medium}`,
    },
  },
})

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.extraLarge,
  padding: `${theme.space.extraLarge} 0`,
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${theme.space.large} 0`,
    },
  },
})

export const talksList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: `0 ${theme.space.large}`,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `0 ${theme.space.medium}`,
    },
  },
})

export const ctaContainer = style({
  display: "flex",
  justifyContent: "center",
  padding: `0 ${theme.space.large}`,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `0 ${theme.space.medium}`,
    },
  },
})
