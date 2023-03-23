import { DefaultSeo } from "next-seo"

export function Seo() {
  return (
    <DefaultSeo
      title="Omar Diop | Software Engineer"
      description="Sono un appassionato sviluppatore con esperienza nello sviluppo di software, applicazioni, API e architetture software, unisco competenze tecniche e creative in ogni progetto. La mia esperienza in UI/UX, funnel marketing e prodotto mi consente di essere un professionista digitale completo. Il mio obiettivo è quello di crescere costantemente condividendo tutto ciò che imparo lungo il percorso."
      openGraph={{
        type: "website",
        locale: "it_IT",
        url: "https://omardiop.com",
        site_name: "Omar Diop",
        images: [
          {
            url: "https://omardiop.com/images/banner.png",
            alt: "Omar Diop | Software Engineer , Conference Speaker",
            height: 1200,
            width: 630,
            type: "image/png",
          },
        ],
      }}
    />
  )
}
