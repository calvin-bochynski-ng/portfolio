export type ExperienceConfig = typeof experienceConfig;
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

export const experienceConfig = [
  {
    title: "Graduate Software Engineer",
    company: "BrainStation",
    location: "London, UK",
    description: [
      "I graduated from BrainStation bootcamp after 3 months of learning. I am now looking for opportunities as a front-end developer.",
      "Learning industry best practices throughout the course to become a proficient software developer.",
      "Developing foundational skills in web development, progressing from basic multi-page web design to advanced Single Page Application development using React.",
      "Back-end development with technologies such as Node.js and Express, effectively setting up frameworks and utilising MySQL databases for seamless data management and persistence.",
    ],
    icon: React.createElement(FaGraduationCap),
    date: "Nov 2023 - Feb 2024",
  },
  {
    title: "Senior Antenna Engineer",
    company: "Leonardo UK",
    location: "Luton, UK",
    description: [
      "Design and develop antennas & radomes for function and RCS",
      "Nominated and Received an award for Technology and Innovation",
    ],
    icon: React.createElement(FaSuitcase),
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "Antenna and Microwave Engineer",
    company: "Meta Material Inc.",
    location: "London, UK",
    description: [
      "Conference paper accepted IEEE APS 2023",
      "Lead and manage various antenna design projects",
      "Combine RF technologies with metamaterial for R&D",
    ],
    icon: React.createElement(FaSuitcase),
    date: "Jun 2022 - Jul 2023",
  },
  {
    title: "Senior Antenna RF Design Engineer",
    company: "Airbus",
    location: "Stevenage, UK",
    description: [
      "Accountable for the transmit antenna on a satellite platform",
      "Developed algorithms to improve productivity across the team.",
      "Participate in and manage proposal activities",
    ],
    icon: React.createElement(FaSuitcase),
    date: "Sept 2018 - Jun 2022",
  },
  {
    title: "RF Design Engineer",
    company: "Omni-ID",
    location: "Farnham, UK",
    description: [
      "Understanding RFID both in Hardware and Software.",
      "Producing a commercially ready RFID Tag used for plant trolleys.",
    ],
    icon: React.createElement(FaSuitcase),
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
    icon: React.createElement(FaGraduationCap),
    date: "Sept 2014 - Jul 2019",
  },
  {
    title:
      "Bachelor of Engineering - Electronic and Communications Engineering",
    company: "University of Kent",
    location: "Canterbury, UK",
    description: "Final Grade: First Class with Honours",
    icon: React.createElement(FaGraduationCap),
    date: "Sept 2011 - Jul 2014",
  },
];
