import { format } from "date-fns"
import { FiExternalLink, FiChevronRight } from "react-icons/fi"
import * as style from "./talkCard.css"
import { Talk } from "../../../data/talks"

export interface TalkCardProps {
  date: Date
  event: string
  title: string
  type: Talk["type"]
  link?: string | null
  onClick?: () => void
}

export function TalkCard({
  date,
  event,
  title,
  type,
  link,
  onClick,
}: TalkCardProps) {
  const content = (
    <>
      <div className={style.talkContent}>
        <div className={style.talkDate}>{format(date, "dd MMM yyyy")}</div>
        <div className={style.talkEvent}>
          {event}
          {link && <FiExternalLink className={style.linkIcon} />}
          <Badge type={type} />
        </div>
        <p className={style.talkTitle}>{title}</p>
      </div>
      {link && <FiChevronRight className={style.talkArrow} />}
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={style.talkCardLink}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={style.talkCard} onClick={onClick}>
      {content}
    </div>
  )
}

const Badge = ({ type }: { type: Talk["type"] }) => (
  <div className={style.badge[type]}>{type}</div>
)
