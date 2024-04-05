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
          <h1 className={style.preText}>Hey there! I'm</h1>
          <h2 className={style.nameText}>Omar Diop</h2>
          <RandomQuote />
          <CallToAction
            text="Discover more"
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
            <SectionTitle number="01." title="About" align="left" />
            <p>
              I'm a passionate Software Engineer with a strong background in
              technology, currently Technical Lead of
              <a
                href="https://learnn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> @Learnn</strong>
              </a>
            </p>
            <p>
              My passion for technology began at <strong>10 years old</strong>,
              when I used to sneakily watch the lessons of a computer course my
              father was taking at home.
            </p>
            <p>
              The first <strong>"Hello World"</strong> was a turning point for
              me, and since then I've never stopped nurturing my{" "}
              <strong> curiosity </strong> and striving for constant
              improvement.
            </p>
            <p>
              In addition to my passion for programming, I've acquired solid
              cross-functional skills in everything related to product
              development: <strong> UX/UI</strong>,{" "}
              <strong>Product Management</strong>, and{" "}
              <strong>Marketing</strong>.
            </p>
            <p>
              My goal is to become a complete and professional digital figure in
              all areas, sharing everything I learn along the way.
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
            title="Events & Talks"
            align="center"
            subtitle="The latest events where I have spoken or will speak."
          />
          <Talks />
          <CallToAction
            text="Got an idea? Get in touch!"
            link="mailto:info@omardiop.com"
            type="primary_small"
            mode="link"
          />
        </div>
      </section>
      <section className={style.section} id="content">
        <div className={style.sectionInner["leftAlign"]}>
          <SectionTitle
            number="03."
            title="Content"
            align="left"
            subtitle="My content and technical resources"
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
          <SectionTitle
            number="04."
            title="The choice is yours *"
            align="center"
          />
          <div className={style.pillText}>
            You take the blue pill - the story ends.
          </div>
          <div className={style.pillText}>
            You take the red pill - you contact me.
          </div>
          <div className={style.pillsContainer}>
            <CallToAction
              text="Blue pill"
              type="blue_big"
              onClick={() => toggleMatrix(true)}
              mode="button"
            />
            <CallToAction
              text="Red pill"
              link="mailto:info@omardiop.com"
              type="red_big"
              style={{ marginLeft: "1.5rem" }}
              mode="link"
            />
          </div>
          <p className={style.pillsPs}>
            * If you don't know the reference, I recommend fixing that{" "}
            <a
              className={style.pillsLink}
              href={links.martrix}
              target="_blank"
              rel="noopener noreferrer"
            >
              immediately.
            </a>
          </p>
        </div>
      </section>
      {matrixVisible ? <DigitalRain /> : null}
    </>
  )
}
