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
    event: "Learnn Talks Roma",
    title: "Q & A",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2022, 8, 12),
    event: "Learnn Talks Milano",
    title: "Q & A con il team",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2023, 4, 28),
    event: "Learnn Offline",
    title: "Strategia Tecnologica: istruzioni per l'uso",
    type: "talk",
    location: "Milan",
    link: "https://learnn.com/offline/",
  },
]

export default talks
