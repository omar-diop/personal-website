import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  display: "flex",
  marginBottom: "3rem",
  gap: theme.space.extraLarge,
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: theme.space.large,
    },
  },
})

export const talksList = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})

export const carouselContainer = style({
  flex: "0 0 300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.space.large,
  "@media": {
    "screen and (max-width: 768px)": {
      flex: "none",
      width: "100%",
    },
  },
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "400px",
  backgroundColor: theme.colors.darkGrey,
  borderRadius: theme.borderRadiusLarge,
  overflow: "hidden",
  boxShadow: theme.boxShadow,
  border: `1px solid ${theme.colors.grey}`,
  "@media": {
    "screen and (max-width: 768px)": {
      height: "500px",
    },
  },
})

export const image = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
})

export const carouselDescription = style({
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.extraSmall,
  textAlign: "center",
  fontFamily: theme.fonts.sans,
})
