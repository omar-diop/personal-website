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
    date: new Date(2023, 4, 28),
    event: "Learnn Offline 🇮🇹",
    title: "Strategia Tecnologica: istruzioni per l'uso",
    type: "talk",
    location: "Milan",
    link: "https://learnn.com/lezione/3968/",
  },
  {
    date: new Date(2023, 8, 28),
    event: "React JS Milano Meetup 🇮🇹",
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
]

export default talks
