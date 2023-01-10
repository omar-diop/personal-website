import * as style from "./resource.css"
import Image from "next/image"

interface IResource {
  title: string
  description: string
  imageUrl: string
  link: string
  type: string
  tags: string[]
  align: "left" | "right"
}

export function Resource({
  title,
  description,
  imageUrl,
  link,
  type,
  tags,
  align,
}: IResource) {
  return (
    <a className={style.container} href={link} target="_blank">
      <Image
        src={imageUrl}
        alt={title}
        height={350}
        width={400}
        className={style.image[align]}
      />

      <div className={style.content[align]}>
        <p className={style.type}>{type}</p>
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{description}</div>
        <ul className={style.tags[align]}>
          {tags.map((tag) => (
            <li className={style.tag[align]} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
