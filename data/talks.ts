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
    event: "Learnn Talks Rome",
    title: "Q & A",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2022, 8, 12),
    event: "Learnn Talks Milan",
    title: "Q & A with the team",
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
    link: "https://learnn.com/lezione/3968/",
  },
  {
    date: new Date(2023, 8, 28),
    event: "React JS Milano Meetup",
    title:
      "Streaming Video: Dal Backend al Frontend con AWS, React e React Native",
    type: "talk",
    location: "Milan",
    link: "https://www.meetup.com/it-IT/react-js-milano/",
  },
  {
    date: new Date(2023, 9, 24),
    event: "Codemotion Milan",
    title:
      "From Zero to 100,000 users: How to Build a Scalable Video Streaming Service",
    type: "talk",
    location: "Milan",
    link: "https://conferences.codemotion.com/milan2023-live/",
  },
  {
    date: new Date(2024, 2, 8),
    event: "Open Source Day",
    title:
      "Perfect Pitch: Unveiling the Mathematical Symphony Behind a Guitar Tuner",
    type: "talk",
    location: "Florence",
    link: "https://osday.dev/",
  },
]

export default talks
