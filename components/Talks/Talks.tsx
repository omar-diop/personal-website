import { useState, useEffect, useRef } from "react"
import * as style from "./talks.css"
import Image from "next/image"
import { TalkCard } from "./TalkCard"

import { compareDesc } from "date-fns"
import { loopList } from "../../utils"
import talks from "../../data/talks"
import talksImages from "../../data/images.json"

export function Talks() {
  const [imageSource, setImageSource] = useState(talksImages[0])
  const currentIndex = useRef(0)

  useEffect(() => {
    const loopImages = setInterval(() => {
      const nextImage = loopList(talksImages, currentIndex.current, 1)
      currentIndex.current++
      setImageSource(nextImage)
    }, 5000)

    return () => clearInterval(loopImages)
  }, [])

  const sortedTalks = talks.sort((a, b) => compareDesc(a.date, b.date))

  return (
    <div className={style.container}>
      <div className={style.talksList}>
        {sortedTalks.slice(0, 6).map((talk, index) => (
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

      <div className={style.carouselContainer}>
        <div className={style.imageContainer}>
          <Image
            src={imageSource}
            alt="Omar Diop"
            title="Omar Diop"
            height={400}
            width={300}
            className={style.image}
          />
        </div>
        <div className={style.carouselDescription}>
          Speaking at conferences and events
        </div>
      </div>
    </div>
  )
}
