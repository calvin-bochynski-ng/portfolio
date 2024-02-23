export type ExperienceConfig = typeof experienceConfig;
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

export const experienceConfig = [
  {
    title: "Graduated from Bootcamp",
    company: "BrainStation",
    location: "London, UK",
    description:
      "I graduated from BrainStation bootcamp after 3 months of learning. I am now looking for opportunities as a front-end developer.",
    icon: React.createElement(FaGraduationCap),
    date: "Nov 2023 - Feb 2024",
  },
  {
    title: "Senior Antenna Engineer",
    company: "Leonardo UK",
    location: "Luton, UK",
    description:
      "I graduated from BrainStation bootcamp after 3 months of learning. I am now looking for opportunities as a front-end developer.",
    icon: React.createElement(FaSuitcase),
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "Antenna and Microwave Engineer",
    company: "Meta Material Inc.",
    location: "London, UK",
    description:
      "I graduated from BrainStation bootcamp after 3 months of learning. I am now looking for opportunities as a front-end developer.",
    icon: React.createElement(FaSuitcase),
    date: "Jun 2022 - Jul 2023",
  },
  {
    title: "Senior Antenna RF Design Engineer",
    company: "Airbus",
    location: "Stevenage, UK",
    description:
      "I graduated from BrainStation bootcamp after 3 months of learning. I am now looking for opportunities as a front-end developer.",
    icon: React.createElement(FaSuitcase),
    date: "Sept 2018 - Jun 2022",
  },
  {
    title: "RF Design Engineer",
    company: "Omni-ID",
    location: "Farnham, UK",
    description: ["", ""],
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