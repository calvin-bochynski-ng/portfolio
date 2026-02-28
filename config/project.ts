import mapplarMobile from "@/public/projectImg/Mapplar-Mobile.jpg";
import mapplarDesktop from "@/public/projectImg/Mapplar-Desktop.jpg";
import acaboMobile from "@/public/projectImg/Acabo-Mobile.jpg";
import debugDuckyDesktop from "@/public/projectImg/Debug-Ducky-Desktop.jpg";
import starWarsMobile from "@/public/projectImg/Star-Wars-Yearbook-Mobile.jpg";
import starWarsDesktop from "@/public/projectImg/Star-Wars-Yearbook-Desktop.jpg";
import jotaArchitekciMobile from "@/public/projectImg/JOTA-Architekci-Mobile.png";
import jotaArchitekciDesktop from "@/public/projectImg/JOTA-Architekci-Desktop.png";
import olchowa1Mobile from "@/public/projectImg/Olchowa1-Mobile.png";
import olchowa1Desktop from "@/public/projectImg/Olchowa1-Desktop.png";

export type projectsData = typeof projectsData;

export const projectsData = [
  {
    title: "Olchowa 1",
    description:
      "Olchowa 1 is a project site promoting an investment plot in Gdańsk designed for a modern office and service building with flexible floor plans and commercial potential, aimed at attracting tenants or investors interested in office and service space development. IIt was built as a React single-page application using Vite as the build tool to deliver fast, responsive performance, clean visuals, and optimised asset loading for images and content presentation.",
    tags: [
      "Vite",
      "Typescript",
      "Tailwind",
      "React Router",
      "Netlify",
      "Jira",
      "Figma",
      "illustrator",
    ],
    imageUrl: {
      mobile: olchowa1Mobile,
      desktop: olchowa1Desktop,
    },
    gitRepo: null,
    website: "https://www.olchowa1.pl/",
  },
  {
    title: "JOTA Architekci",
    description:
      "JOTA Architekci is a modern portfolio website for a Gdańsk-based architectural studio, presenting residential and commercial projects through clean layouts, strong typography, and image-focused design. It was built as a React single-page application using Vite as the build tool, delivering optimized static assets, fast performance, and a streamlined, component-based frontend architecture.",
    tags: [
      "Vite",
      "Typescript",
      "Tailwind",
      "React Router",
      "Netlify",
      "Jira",
      "Figma",
      "illustrator",
    ],
    imageUrl: {
      mobile: jotaArchitekciMobile,
      desktop: jotaArchitekciDesktop,
    },
    gitRepo: null,
    website: "https://jotaarchitekci.pl/",
  },
  {
    title: "Mapplar",
    description:
      "A capstone project using Mapbox integration and precise OpenAI prompts to generate compelling and accurate itineraries for users. Using firebase for cloud storage and a robust user authentication system with JWT token for security and efficiency.",
    tags: [
      "React",
      "SASS",
      "Firebase",
      "Mapbox",
      "OpenAI",
      "Material UI",
      "Node.js",
      "Express",
      "JWT",
      "MySQL",
      "Jira",
      "Figma",
      "illustrator",
    ],
    imageUrl: {
      mobile: mapplarMobile,
      desktop: mapplarDesktop,
    },
    gitRepo: "https://github.com/calvin-bochynski-ng/capstone-mapplar",
    website: "https://mapplar.bochynski-ng.com/",
  },
  {
    title: "Acabo",
    description:
      "A collaboration industrial hackathon project with Deliveroo, team of 5 including UX/UI and SE students. I was team lead and managing between UX/UI and SE, relay information and making critical design choices to project deadline within strict timeframe, using JIRA to assign tasks and managing Pull Requests to ensure a cohesive workflow",
    tags: [
      "React",
      "SASS",
      "Node.js",
      "Express",
      "Figma",
      "Jira",
      "Project Management",
    ],
    imageUrl: {
      mobile: acaboMobile,
      desktop: "",
    },
    gitRepo: "https://github.com/calvin-bochynski-ng/acabo-fullstack",
    website: null,
  },
  {
    title: "Debug-Ducky",
    description:
      "A pair-programming hackathon with producing a rubber duck helper, this guides users with timed motivational quotes as well as functions with examples and documentation.",
    tags: ["React", "SASS", "Node.js", "Express", "illustrator"],
    imageUrl: {
      mobile: "",
      desktop: debugDuckyDesktop,
    },
    gitRepo: "https://github.com/calvin-bochynski-ng/hackathon-debug-ducky",
    website: "https://debug-ducky.bochynski-ng.com/",
  },
  {
    title: "Star Wars Yearbook",
    description:
      "First pair hackathon with using SWAPI, fully responsive and displaying character cards on a static webpage.",
    tags: ["HTML", "CSS"],
    imageUrl: {
      mobile: starWarsMobile,
      desktop: starWarsDesktop,
    },
    gitRepo:
      "https://github.com/calvin-bochynski-ng/hackathon-starwars-yearbook",
    website: "",
  },
] as const;
