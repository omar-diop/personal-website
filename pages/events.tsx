import { compareDesc } from "date-fns"
import talks from "../data/talks"
import { TalkCard } from "../components/Talks/TalkCard"
import { SectionTitle } from "../components/SectionTitle"
import * as style from "../styles/events.css"
import { CallToAction } from "../components/CallToAction"

export default function Events() {
  const sortedTalks = talks.sort((a, b) => compareDesc(a.date, b.date))

  return (
    <>
      <div className={style.hero}>
        <div className={style.heroImage} />
        <div className={style.heroOverlay} />
        <div className={style.heroContent}>
          <SectionTitle
            number="02."
            title="All Events & Talks"
            align="center"
            subtitle="A complete list of all my speaking engagements, sorted by date."
          />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.talksList}>
          {sortedTalks.map((talk, index) => (
            <TalkCard
              key={`${talk.title}-${talk.date.getTime()}-${index}`}
              date={talk.date}
              event={talk.event}
              title={talk.title}
              type={talk.type}
              link={talk.link}
            />
          ))}
        </div>
        <div className={style.ctaContainer}>
          <CallToAction
            text="Want me at your event?"
            link="mailto:info@omardiop.com"
            type="primary_small"
            mode="link"
          />
        </div>
      </div>
    </>
  )
}
