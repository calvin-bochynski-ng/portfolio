export type SkillsConfig = typeof skillsConfig;

export const skillsConfig = {
  languages: [
    "JavaScript (ES6)",
    "TypeScript",
    "HTML",
    "CSS / Sass",
    "SQL",
    "C",
    "MATLAB",
    "Python",
  ],
  framework: ["React", "Node.js", "Express.js", "Next.js", "Vite"],
  tools: [
    "Bash",
    "Terminal",
    "Git & GitHub",
    "Chrome Dev tools",
    "Postman",
    "Jira",
    "MySQL",
    "Firebase",
    "Mapbox",
    "OpenAI",
    "Tailwind CSS",
    "Material UI",
    "Next UI",
  ],
  design: [
    "Figma",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Lightroom",
    "After Effect",
    "Premier Pro",
  ],
} as const;
