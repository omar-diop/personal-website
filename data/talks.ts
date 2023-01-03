export type Talk = {
  date: Date
  event: string
  title: string
  type: "talk" | "interview"
  location: string
  link: string | null
}

const talks: Talk[] = [
  {
    date: new Date(2022, 8, 5),
    event: "Learnn Talks",
    title: "Q & A con il team",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2022, 8, 12),
    event: "Learnn Talks",
    title: "Q & A con il team",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2023, 4, 26),
    event: "Learnn Offline",
    title:
      "Costruire un servizio di streaming at scale: tutto ciò che devi sapere",
    type: "talk",
    location: "Milan",
    link: null,
  },
]

export default talks
