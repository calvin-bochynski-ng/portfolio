export type ExperienceConfig = typeof experienceConfig;
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

export const experienceConfig = [
  {
    title: "Junior Web Developer",
    company: "Sway Me Good",
    location: "London, UK",
    description: [
      "Developed front-end web applications using React, TypeScript and Tailwind, implementing responsive designs and robust user interfaces.",
      "Enhanced user experience with dynamic data visualisation using ChartJs and effectively utilised GraphQL APIs for efficient data querying and management.",
      "Supported team collaboration and project management through JIRA, assigning story points, tackling tasks, and resolving bugs to maintain high code quality. ",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "May 2024 - Present",
  },
  {
    title: "Freelancer",
    company: "",
    location: "London, UK",
    description: [
      "Full-stack website development for companies, focusing on user experience enhancement.",
      "Expertise in React, Vite (front-end) and Node.js (back-end).",
      "Implemented CRUD databases for efficient data management.",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "Nov 2023 - Present",
  },
  {
    title: "Software Engineer",
    company: "BrainStation",
    location: "London, UK",
    description: [
      "I graduated from BrainStation bootcamp after 3 months of learning.",
      "Learning industry best practices throughout the course to become a proficient software developer.",
      "Developing foundational skills in web development, progressing from basic multi-page web design to advanced Single Page Application development using React.",
      "Back-end development with technologies such as Node.js and Express, effectively setting up frameworks and utilising MySQL databases for seamless data management and persistence.",
    ],
    icon: { name: "education", image: React.createElement(FaGraduationCap) },
    date: "Nov 2023 - Feb 2024",
  },
  {
    title: "Senior Antenna Engineer",
    company: "Leonardo UK",
    location: "Luton, UK",
    description: [
      "Developed MATLAB and Python scripts to automate the design and optimisation of antenna profiles",
      "Recognized with an award for Technology and Innovation",
      "Designed antennas & radomes for diverse functions and Radar Cross Section (RCS)",
      "Conducted EM simulations using CST Microwave Studio, FEKO, and HFSS for design analysis and optimization",
      "Applied theoretical and practical expertise in antenna measurements utilizing VNA and Spectrum Analyser.",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "Antenna and Microwave Engineer",
    company: "Meta Material Inc.",
    location: "London, UK",
    description: [
      "Utilized MATLAB for data manipulation and graphical representation.",
      "Implemented Python scripts to generate real-time graphs in bio-tech trials.",
      "Developed custom antenna designs according to customer requirements with CST Studio simulation software.",
      "Managed various antenna design projects, ensuring on-time delivery and customer contentment.",
      "Performed hands-on fabrication, testing, and characterization of antenna prototypes using specialized tools.",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "Jun 2022 - Jul 2023",
  },
  {
    title: "Senior Antenna RF Design Engineer",
    company: "Airbus",
    location: "Stevenage, UK",
    description: [
      "Streamlined processes by developing MATLAB and Python scripts",
      "Managed transmit antenna on satellite platform",
      "Performed RF design, analysis, and verification of satellite antennas using CST Studio, HFSS, and TICRA software",
      "Supported R&D programs by creating presentation materials for design reviews and delivering presentations at meetings",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "Sept 2018 - Jun 2022",
  },
  {
    title: "RF Design Engineer",
    company: "Omni-ID",
    location: "Farnham, UK",
    description: [
      "Conducted detailed RF modeling and characterization of RFID Tags and Embedded Antenna Structures using Ansys HFSS.",
      "Advanced understanding of the relationship between RF model designs, materials, and product performance.",
      "Developed prototypes for experimental validation testing with Tagformance Pro from Voyantic.",
      "Produced comprehensive reports on proposed designs and validation testing processes.",
      "Designed and developed commercially-ready RFID Tag for plant trolleys.",
    ],
    icon: { name: "work", image: React.createElement(FaSuitcase) },
    date: "Apr 2018 - Sept 2018",
  },
  {
    title: "Doctor of Philosophy - Electronic Engineering",
    company: "University of Kent",
    location: "Canterbury, UK",
    description: [
      "Grade: Pass with Minor Change",
      "Thesis title: Applications of Origami Folding Techniques of Antenna Structures using Flexible Substrates",
    ],
    icon: { name: "education", image: React.createElement(FaGraduationCap) },
    date: "Sept 2014 - Jul 2019",
  },
  {
    title:
      "Bachelor of Engineering - Electronic and Communications Engineering",
    company: "University of Kent",
    location: "Canterbury, UK",
    description: ["Final Grade: First Class with Honours"],
    icon: { name: "education", image: React.createElement(FaGraduationCap) },
    date: "Sept 2011 - Jul 2014",
  },
] as const;
