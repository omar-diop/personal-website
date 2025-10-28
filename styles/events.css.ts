import { style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.extraLarge,
  padding: "120px 0px",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "100px 0px",
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
