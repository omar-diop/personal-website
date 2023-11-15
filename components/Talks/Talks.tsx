import { useState, useEffect, useRef } from "react"
import * as style from "./talks.css"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"

import { format, compareDesc } from "date-fns"
import { loopList } from "../../utils"
import talks, { Talk } from "../../data/talks"
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

  return (
    <div className={style.container}>
      <Image
        src={imageSource}
        alt="Omar Diop"
        title="Omar Diop"
        height={320}
        width={260}
        className={style.image}
      />
      <div className={style.talksList}>
        {talks
          .sort((a, b) => compareDesc(a.date, b.date))
          .map((talk) => (
            <div className={style.talk} key={talk.title}>
              <div className={style.listItem}>{">"}</div>
              <div>
                <div className={style.date}>
                  {`${format(talk.date, "dd MMM yyyy")}`}
                </div>
                <div className={style.eventTitle}>
                  {talk.link ? (
                    <a
                      key={talk.title}
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.link}
                    >
                      {talk.event} <FiExternalLink className={style.linkIcon} />
                    </a>
                  ) : (
                    talk.event
                  )}
                  <Badge talk={talk} />
                </div>
                <p className={style.talkTitle}>{talk.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const Badge = ({ talk }: { talk: Talk }) => (
  <div className={style.badge[talk.type]}>{talk.type}</div>
)
