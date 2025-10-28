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
    event: "Learnn Talks Milano 🇮🇹",
    title: "Q & A with the team",
    type: "interview",
    location: "Milan",
    link: null,
  },
  {
    date: new Date(2023, 4, 28),
    event: "Learnn Offline 🇮🇹",
    title: "Strategia Tecnologica: istruzioni per l'uso",
    type: "talk",
    location: "Milan",
    link: "https://learnn.com/lezione/3968/",
  },
  {
    date: new Date(2023, 8, 28),
    event: "React JS Milano 🇮🇹",
    title:
      "Streaming Video: Dal Backend al Frontend con AWS, React e React Native",
    type: "talk",
    location: "Milan",
    link: "https://www.youtube.com/live/iLja0mIx20Y?si=7ovA_yS1OsXmYGHF",
  },
  {
    date: new Date(2023, 9, 24),
    event: "Codemotion Milan 🇮🇹",
    title:
      "From Zero to 100,000 users: How to Build a Scalable Video Streaming Service",
    type: "talk",
    location: "Milan",
    link: "https://talks.codemotion.com/from-zero-to-100000-users-how-to-build-a-scalable-video-streaming-service",
  },
  {
    date: new Date(2024, 2, 8),
    event: "Open Source Day 🇮🇹",
    title:
      "Perfect Pitch: Unveiling the Mathematical Symphony Behind a Guitar Tuner",
    type: "talk",
    location: "Florence",
    link: "https://youtu.be/W9HBHDogaFU?si=kKrZ-z3wyldGAxgG",
  },
  {
    date: new Date(2024, 5, 13),
    event: "Learnn YouTube ",
    title: "Dietro le quinte dello stack tecnologico di Learnn con Omar Diop",
    type: "interview",
    location: "Amsterdam",
    link: "https://www.youtube.com/watch?v=gAx_RNjG4lc",
  },
  {
    date: new Date(2024, 5, 15),
    event: "C3 Dev Festival 🇳🇱",
    title:
      "Perfect Pitch: Unveiling the Mathematical Symphony Behind a Guitar Tuner",
    type: "talk",
    location: "Amsterdam",
    link: "https://c3fest.com/",
  },
  {
    date: new Date(2024, 5, 18),
    event: "React Summit 🇳🇱",
    title:
      "Perfect Pitch: Unveiling the Mathematical Symphony Behind a Guitar Tuner",
    type: "talk",
    location: "Amsterdam",
    link: "https://reactsummit.com/",
  },
  {
    date: new Date(2024, 4, 30),
    event: "Voxxed Days Trieste 🇮🇹",
    title:
      "Lessons Learned from Building a Video Player from Scratch with React Native",
    type: "talk",
    location: "Trieste",
    link: "https://www.youtube.com/watch?v=0KrXsbKVhkY",
  },
  {
    date: new Date(2024, 6, 18),
    event: "WeAreDevelopers 🇩🇪",
    title:
      "Perfect Pitch: Unveiling the Mathematical Symphony Behind a Guitar Tuner",
    type: "talk",
    location: "Berlin",
    link: "https://worldcongress.dev",
  },
  {
    date: new Date(2024, 9, 23),
    event: "Codemotion Milan 🇮🇹",
    title:
      "From MVP to Fully-Fledged: How We Crafted a Netflix-Like App in Just 45 Days",
    type: "talk",
    location: "Milan",
    link: "https://conferences.codemotion.com/milan2024/it/home/",
  },
  {
    date: new Date(2024, 10, 22),
    event: "React Summit 🇺🇸",
    title:
      "Lessons Learned from Building a Video Player from Scratch with React Native",
    type: "talk",
    location: "New York",
    link: "https://reactsummit.us/",
  },
  {
    date: new Date(2025, 4, 25),
    event: "Learnn Offline 🇮🇹",
    title:
      "Sviluppare con AI: strategie per creare un prodotto tecnologico nel 2025",
    type: "talk",
    location: "Parma",
    link: "https://my.learnn.com/corso/3117",
  },
  {
    date: new Date(2025, 9, 9),
    event: "Digital Innovation Days 🇮🇹",
    title:
      "Dalla velocità al valore: costruire prodotti con l’AI in modo duraturo e sostenibile",
    type: "talk",
    location: "Milan",
    link: "https://digitalinnovationdays.com/",
  },
  {
    date: new Date(2025, 10, 4),
    event: "LeadDev Berlin 🇩🇪",
    title: "We brought AI into our sprints, here’s what changed",
    type: "talk",
    location: "Berlin",
    link: "https://leaddev.com/leaddev-berlin/",
  },
]

export default talks
