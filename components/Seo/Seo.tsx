import { DefaultSeo } from "next-seo"

export function Seo() {
  return (
    <DefaultSeo
      title="Omar Diop | Software Engineer"
      description="Passionate Software Engineer and Technical Lead at Learnn with expertise in product development, including UX/UI design, product management, and marketing. Dedicated to becoming a well-rounded digital professional, sharing insights and knowledge to help others grow in their tech careers."
      canonical="https://www.omardiop.com"
      openGraph={{
        type: "website",
        locale: "it_IT",
        url: "https://www.omardiop.com",
        site_name: "Omar Diop | Software Engineer, International Speaker",
        title: "Omar Diop | Software Engineer, International Speaker",
        description:
          "Passionate Software Engineer and Technical Lead at Learnn with expertise in product development, including UX/UI design, product management, and marketing. Dedicated to becoming a well-rounded digital professional, sharing insights and knowledge to help others grow in their tech careers.",
        images: [
          {
            url: "https://www.omardiop.com/images/banner.jpg",
            alt: "Omar Diop | Software Engineer , International Speaker",
            height: 1200,
            width: 630,
            type: "image/png",
          },
        ],
      }}
    />
  )
}
