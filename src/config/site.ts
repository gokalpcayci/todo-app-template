import { SiteConfig, LandingConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Todo App Template", 
  description:
    "A template for building todo apps with Next.js 13, TypeScript, and Tailwind CSS.",
  url: "localhost:3000",
  links: {
    twitter: "#",
    github: "#",
  },
}


export const landingConfig: LandingConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
  ],
}
