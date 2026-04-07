import { NextSeo } from "next-seo"
import { usePostHog } from "posthog-js/react"
import Image from "next/image"
import { SectionTitle } from "../components/SectionTitle"
import { CallToAction } from "../components/CallToAction"
import * as style from "../styles/tesi-learnn.css"

const PDF_URL = "/documents/tesi-learnn.pdf"

const INDEX_DATA = [
  {
    title: "Capitolo 1 — Validazione",
    items: [
      {
        chapter: "Cap. 1.1",
        desc: "Idea: formazione accessibile in un mercato saturo",
      },
      {
        chapter: "Cap. 1.2",
        desc: "Validazione con Lean Startup (Build-Measure-Learn)",
      },
      {
        chapter: "Cap. 1.3",
        desc: "MVP in 2 mesi con stack no-code (WordPress, Mighty, Vimeo)",
      },
      {
        chapter: "Cap. 1.4",
        desc: "Lancio: 4.500 utenti e 39k€/mese",
      },
    ],
  },
  {
    title: "Capitolo 2 — Sviluppo",
    items: [
      {
        chapter: "Cap. 2.1",
        desc: "Da Waterfall ad Agile: errori di stima e sprint settimanali",
      },
      {
        chapter: "Cap. 2.2",
        desc: "Streaming scalabile: Strapi + AWS (S3, MediaConvert, CloudFront)",
      },
      {
        chapter: "Cap. 2.3",
        desc: "Checkout serverless con Lambda, SQS e logging",
      },
      {
        chapter: "Cap. 2.4",
        desc: "App mobile in React Native con player avanzato",
      },
      {
        chapter: "Cap. 2.5",
        desc: "UX audit: 21 problemi trovati con le euristiche di Nielsen",
      },
    ],
  },
  {
    title: "Capitolo 3 — Stabilizzazione",
    items: [
      {
        chapter: "Cap. 3.1",
        desc: "Web app e monorepo condiviso tra app, web e backend",
      },
      {
        chapter: "Cap. 3.2",
        desc: "Progressi utente scalabili con DynamoDB e denormalizzazione",
      },
      {
        chapter: "Cap. 3.3",
        desc: "UX test: miglioramenti misurati con dati reali",
      },
    ],
  },
  {
    title: "Capitolo 4 — Presente e futuro",
    items: [
      {
        chapter: "Cap. 4.1",
        desc: "Crescita e sfida del product-market fit (chasm)",
      },
      {
        chapter: "Cap. 4.2",
        desc: "Team prodotto guidato da dati e feedback",
      },
      {
        chapter: "Cap. 4.3",
        desc: "Da deploy manuali a CI/CD (AWS CDK)",
      },
      {
        chapter: "Cap. 4.4",
        desc: "Evoluzione: raccomandazioni, gamification, notifiche",
      },
    ],
  },
]

export default function TesiLearnn() {
  const posthog = usePostHog()

  const handleDownload = () => {
    posthog.capture("download_tesi")
    const link = document.createElement("a")
    link.href = PDF_URL
    link.download = "tesi-learnn-omar-diop.pdf"
    link.click()
  }

  return (
    <>
      <NextSeo
        title="Tesi Learnn — Omar Diop"
        description="Il caso studio tecnico e di prodotto completo di Learnn, da 0 a 28.000 utenti. Dalla validazione con uno stack a €200/mese alla prima infrastruttura serverless su AWS. 86 pagine di decisioni architetturali, test di usabilità e lezioni imparate."
        canonical="https://www.omardiop.com/tesi-learnn"
        openGraph={{
          title:
            "Learnn: il ruolo della tecnologia nel design e nello sviluppo di un prodotto",
          description:
            "86 pagine di decisioni tecniche e di prodotto, errori e architettura dietro Learnn.",
          url: "https://www.omardiop.com/tesi-learnn",
          images: [
            {
              url: "https://www.omardiop.com/images/tesi-og.jpg",
              alt: "Tesi Learnn — Omar Diop",
              width: 1200,
              height: 630,
              type: "image/jpeg",
            },
          ],
        }}
      />

      <div className={style.header}>
        <div className={style.headerContent}>
          <h1 className={style.title}>
            Learnn: il ruolo della tecnologia nel design e nello sviluppo di un
            prodotto
          </h1>
          <p className={style.subtitle}>Omar Diop — 2022</p>
          <p className={style.description}>
            Il caso studio tecnico e di prodotto completo di Learnn, da 0 a
            28.000 utenti. Dalla validazione con uno stack a €200/mese alla
            prima infrastruttura serverless su AWS. 86 pagine di decisioni
            architetturali, test di usabilità e lezioni imparate costruendo un
            prodotto da zero.
          </p>
          <div className={style.ctaContainer}>
            <CallToAction
              mode="button"
              text="Scarica PDF"
              onClick={handleDownload}
              type="primary_big"
            />
            <p className={style.secondaryCta}>
              Su{" "}
              <a
                href="https://omarlog.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Omar.log()
              </a>{" "}
              commento la tesi con la prospettiva di 4 anni dopo.
            </p>
          </div>
        </div>
        <div className={style.headerImage}>
          <Image
            src="https://dgdft8ck5n9om.cloudfront.net/tesi-preview.png"
            alt="Anteprima della tesi Learnn"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>

      <div className={style.section}>
        <SectionTitle
          number="01."
          title="Indice rapido"
          align="left"
          subtitle="Trova i capitoli più rilevanti per te senza leggere 86 pagine."
        />
        <div className={style.indexGrid}>
          {INDEX_DATA.map((group) => (
            <div key={group.title} className={style.indexCard}>
              <h3 className={style.indexCardTitle}>{group.title}</h3>
              {group.items.map((item) => (
                <div key={item.chapter} className={style.indexCardItem}>
                  <p className={style.indexCardChapter}>{item.chapter}</p>
                  <p className={style.indexCardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={style.footerSection}>
        <p className={style.footerText}>
          Questa tesi è stata scritta nel 2022 mentre lavoravo a Learnn. Oggi
          Learnn ha più di 250.000 utenti. Documenta il processo iniziale, dalla
          validazione alla prima infrastruttura e alla sua evoluzione. Su
          Omar.log(), la mia newsletter Substack, la commento con la prospettiva
          di 4 anni dopo: cosa rifarei, cosa cambierei, e come affronterei lo
          stesso problema oggi.
        </p>
        <a
          href="https://omarlog.substack.com/subscribe"
          className={style.newsletterLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Iscriviti a Omar.log() →
        </a>
      </div>
    </>
  )
}
