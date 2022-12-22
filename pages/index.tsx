import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"

export default function Home() {
  return (
    <>
      <section className={style.heroSection}>
        <div className={style.nameContainer}>
          <h1 className={style.preText}>Ciao, mi chiamo</h1>
          <h2 className={style.nameText}>Omar Diop.</h2>
          <RandomQuote />
          <CallToAction text="Scopri di più" link="#about" size="big" />
        </div>

        <GradientBackground />
      </section>
      <section className={style.section}>
        <p>01. Chi sono</p>
      </section>
      <section className={style.section}>
        <p>02. Eventi & Talks</p>
      </section>
      <section className={style.section}>
        <p>03. Contenuti</p>
      </section>
      <section className={style.section}>
        <p>04. A te la scelta</p>
      </section>
    </>
  )
}
