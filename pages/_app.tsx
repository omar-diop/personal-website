import "../styles/typography.css"
import "../styles/globals.css"
import * as style from "../styles/globals.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"

import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Socials } from "../components/Socials"
import { Seo } from "../components/Seo"
import { TagManager } from "../components/TagManager"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: "/relay-4mii/",
      ui_host: "https://eu.posthog.com",
      person_profiles: "identified_only",
      defaults: "2025-05-24",
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug()
      },
    })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <TagManager />
      <div className={style.container}>
        <Seo />
        <NavBar />
        <div id="mainContainer">
          <main className={style.main}>
            <Component {...pageProps} />
          </main>
        </div>
        <Socials viewport="desktop" />
        <Footer />
      </div>
    </PostHogProvider>
  )
}
