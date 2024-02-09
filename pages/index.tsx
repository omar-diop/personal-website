import { useState, useEffect } from "react"
import { GradientBackground } from "../components/GradientBackground"
import { CallToAction } from "../components/CallToAction"
import { RandomQuote } from "../components/RandomQuote"
import * as style from "../styles/home.css"
import { Talks } from "../components/Talks"
import { SectionTitle } from "../components/SectionTitle"
import resources from "../data/resources.json"
import links from "../data/links.json"
import Image from "next/image"
import { Resource } from "../components/Resource"
import { DigitalRain, DefaultDuration } from "../components/DigitalRain"
import profilePic from "../public/images/profile.jpg"
import talksPic from "../public/images/talks_0.jpg"

export default function Home() {
  const [matrixVisible, toggleMatrix] = useState(false)

  useEffect(() => {
    if (!matrixVisible) return
    const timer = setTimeout(() => {
      toggleMatrix(false)
    }, DefaultDuration)
    return () => clearTimeout(timer)
  }, [matrixVisible])

  return (
    <>
      <section className={style.heroSection}>
        <div className={style.nameContainer}>
          <h1 className={style.preText}>Ciao, mi chiamo</h1>
          <h2 className={style.nameText}>Omar Diop</h2>
          <RandomQuote />
          <CallToAction
            text="Scopri di più"
            link="#about"
            type="primary_big"
            mode="link"
          />
        </div>
        <GradientBackground />
      </section>
      <section className={style.section} id="about">
        <div className={style.aboutContainer}>
          <div>
            <SectionTitle number="01." title="Chi sono" align="left" />
            <p>
              Sono un appassionato Software Engineer con una solida formazione
              tecnologica, attualmente Technical Lead di
              <a
                href="https://learnn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> @Learnn</strong>
              </a>
            </p>
            <p>
              La mia passione per la tecnologia è iniziata a
              <strong> 10 anni</strong>, quando guardavo di nascosto le lezioni
              di un corso di informatica che mio padre seguiva a casa.
            </p>
            <p>
              Il primo <strong>"Hello World"</strong> è stato un momento di
              svolta per me, e da allora non ho mai smesso di coltivare la mia
              <strong> curiosità </strong> e migliorarmi costantemente.
            </p>
            <p>
              Oltre alla mia passione per la programmazione ho acquisito solide
              competenze trasversali per tutto ciò che ruota attorno allo
              sviluppo di un prodotto: <strong> UX/UI</strong> ,
              <strong> Product Management</strong> e <strong> Marketing</strong>
              .
            </p>
            <p>
              Il mio obiettivo è quello di diventare una figura digitale
              completa e professionale in tutti gli ambiti, condividendo tutto
              ciò che apprendo durante il percorso.
            </p>
          </div>
          <div className={style.imageContainer["desktop"]}>
            <Image
              src={profilePic}
              alt="Omar Diop @Learnn Talks 2022, Rome"
              fill={true}
              className={style.profileImage}
              placeholder="blur"
            />
          </div>
          <div className={style.imageContainer["mobile"]}>
            <Image
              src={talksPic}
              alt="Omar Diop @Learnn Talks 2022, Milan"
              fill={true}
              className={style.profileImage}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <section className={style.section} id="events">
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle
            number="02."
            title="Eventi e Talks"
            align="center"
            subtitle="Gli ultimi eventi in cui ho parlato o parlerò."
          />
          <Talks />
          <CallToAction
            text="Vuoi invitarmi? Scrivimi!"
            link="mailto:accounts@omardiop.com"
            type="primary_small"
            mode="link"
          />
        </div>
      </section>
      <section className={style.section} id="contents">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="03."
            title="Contenuti"
            align="left"
            subtitle="I miei contenuti e le mie risorse tecniche"
          />
          {resources.map((resource, i) => (
            <Resource
              key={resource.title}
              {...resource}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>
      <section className={style.section}>
        <div className={style.sectionInner["centerAlign"]}>
          <SectionTitle number="04." title="A te la scelta *" align="center" />
          <div className={style.pillText}>
            You take the blue pill - the story ends.
          </div>
          <div className={style.pillText}>
            You take the red pill - you contact me.
          </div>
          <div className={style.pillsContainer}>
            <CallToAction
              text="Pillola blu"
              type="blue_big"
              onClick={() => toggleMatrix(true)}
              mode="button"
            />
            <CallToAction
              text="Pillola rossa"
              link="mailto:info@omardiop.com"
              type="red_big"
              style={{ marginLeft: "1.5rem" }}
              mode="link"
            />
          </div>
          <p className={style.pillsPs}>
            * se non conosci la reference ti consiglio subito di{" "}
            <a
              className={style.pillsLink}
              href={links.martrix}
              target="_blank"
              rel="noopener noreferrer"
            >
              rimediare.
            </a>
          </p>
        </div>
      </section>
      {matrixVisible ? <DigitalRain /> : null}
    </>
  )
}
