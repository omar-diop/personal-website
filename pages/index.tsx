import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { SectionTitle } from "../components/SectionTitle"

export default function Home() {
  return (
    <>
      <section className={style.heroSection}>
        <div className={style.nameContainer}>
          <h1 className={style.preText}>Ciao, mi chiamo</h1>
          <h2 className={style.nameText}>Omar Diop</h2>
          <RandomQuote />
          <CallToAction text="Scopri di più" link="#about" size="big" />
        </div>
        <GradientBackground />
      </section>
      <section className={style.section}>
        <div className={style.aboutContainer}>
          <div>
            <SectionTitle number="01." title="Chi sono" align="left" />
          </div>
          <h1>Immagine</h1>
        </div>
      </section>
      <section className={style.section}>
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="02."
            title="Eventi e Talks"
            align="center"
            subtitle="Tutti gli eventi ai quali partecipo o in cui ho parlato."
          />
          <CallToAction
            text="Contattami"
            link="mailto:accounts@omardiop.com"
            size="small"
          />
        </div>
      </section>
      <section className={style.section}>
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="03."
            title="Contenuti"
            align="left"
            subtitle="Tutti i miei contenuti e le mie risorse tecniche"
          />
        </div>
      </section>
      <section className={style.section}>
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle number="04." title="A te la scelta" align="center" />
        </div>
      </section>
    </>
  )
}
