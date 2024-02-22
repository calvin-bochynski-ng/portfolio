export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Calvin.Bochynski-Ng | Portfolio",
  description: "Portfolio created by Calvin Bochynski-Ng",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/calvin-bochynski-ng",
    linkedin: "https://www.linkedin.com/in/calvinbochynsking",
  },
} as const;
