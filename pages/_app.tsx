import "../styles/typography.css"
import "../styles/globals.css"
import * as style from "../styles/globals.css"

import type { AppProps } from "next/app"

import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Socials } from "../components/Socials"
import { Seo } from "../components/Seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
