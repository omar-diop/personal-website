import * as style from "./sectionTitle.css"

interface ISectionTitle {
  number: string
  title: string
  subtitle?: string
  align: "left" | "center"
}
export function SectionTitle({
  number,
  title,
  align,
  subtitle,
}: ISectionTitle) {
  return (
    <div>
      <div className={style.container}>
        {align === "center" && <div className={style.line} />}
        <div className={style.textContainer[align]}>
          <span className={style.number}>{number}</span>

          <h2 className={style.title}>{title}</h2>
        </div>
        <div className={style.line} />
      </div>
      {subtitle ? <p className={style.subtitle[align]}>{subtitle}</p> : <></>}
    </div>
  )
}
