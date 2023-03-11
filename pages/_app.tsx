import "../styles/typography.css"
import "../styles/globals.css"
import Head from "next/head"
import * as style from "../styles/globals.css"

import type { AppProps } from "next/app"

import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Socials } from "../components/Socials"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={style.container}>
      <Head>
        <title>Omar Diop | Software Engineer</title>
        <meta name="description" content="Omar Diop | Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
