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
import talksPic from "../public/images/talks_0.png"

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
              Product Engineer with a strong technical foundation and a sharp
              focus on impact. First team member at{" "}
              <a
                href="https://learnn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Learnn</strong>
              </a>
              , a bootstrapped EdTech startup launched in 2020, now serving over{" "}
              <strong>200,000 users</strong>.
            </p>
            <p>
              My passion for technology began at <strong>10 years old</strong>,
              when I used to sneakily watch the lessons of a computer course my
              father was taking at home.
            </p>
            <p>
              My journey started with a simple <strong>"Hello World"</strong>{" "}
              and turned into a continuous pursuit of learning, building, and
              sharing. Over the years, I've worked across the full stack,
              designing <strong>scalable APIs</strong>, architecting{" "}
              <strong>complex systems</strong>, and crafting intuitive user
              interfaces, always with a strong eye for product value.
            </p>
            <p>
              At the same time, I've developed a solid understanding of{" "}
              <strong>product strategy</strong> and growth. I've designed{" "}
              <strong>acquisition funnels</strong>, set up automated marketing
              systems, and run ad campaigns to <strong>validate ideas</strong>{" "}
              and scale features. For me, great code only matters if it helps
              build something people love, and actually use.
            </p>
            <p>
              I'm passionate about blending software engineering with business
              and product, sharing everything I learn along the way.
            </p>
          </div>
          <div className={style.imageContainer}>
            <Image
              src={profilePic}
              alt="Omar Diop @Learnn Offline 2025, Parma"
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
            text="View all events"
            link="/events"
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
