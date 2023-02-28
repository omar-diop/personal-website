import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

export type Social = {
  title: string
  url: string
  Icon: IconType
}

const socials: Social[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/omar-diop-dev/",
    Icon: FiLinkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/omar-diop",
    Icon: FiGithub,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/omar.developer/",
    Icon: FiInstagram,
  },
]

export default socials
