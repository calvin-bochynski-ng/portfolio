import mapplarMobile from "@/public/projectImg/Mapplar-Mobile.jpg";
import mapplarDesktop from "@/public/projectImg/Mapplar-Desktop.jpg";
import acaboMobile from "@/public/projectImg/Acabo-Mobile.jpg";
import debugDuckyDesktop from "@/public/projectImg/Debug-Ducky-Desktop.jpg";
import starWarsMobile from "@/public/projectImg/Star-Wars-Yearbook-Mobile.png";
import starWarsDesktop from "@/public/projectImg/Star-Wars-Yearbook-Desktop.png";

export type projectsData = typeof projectsData;

export const projectsData = [
  {
    title: "Mapplar",
    description:
      "A captone project using Mapbox integration and precise OpenAI prompts to generate compelling and accurate itineraries for users. Using firebase for cloud storage and a robust user authentication system with JWT token for security and efficiency.",
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
      desktop: null,
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
      mobile: null,
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
    website: null,
  },
] as const;
