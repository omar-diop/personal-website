import { GradientBackground } from "../components/GradientBackground"
import * as style from "../styles/home.css"

export default function Home() {
  return (
    <>
      <section className={style.heroSection}>
        <h1>Omar Diop</h1>
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
