import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { SectionTitle } from "../components/SectionTitle"
import Image from "next/image"

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut <strong>aliquip ex ea</strong> commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum <strong>dolore eu fugiat</strong> nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est <strong>laborum.</strong>
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={style.imageContainer}>
            <Image
              src="/images/profile.jpg"
              alt="Omar Diop @Learnn Talks 2022, Rome"
              fill={true}
              style={{
                borderRadius: "4px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
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
