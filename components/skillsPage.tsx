"use client";

import { subtitle, title } from "@/components/primitives";
import { skillsConfig } from "@/config/skills";
import { useActiveSectionContext } from "@/context/active-section-context";
import { button as buttonStyles } from "@nextui-org/theme";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SkillsPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-16 py-8 md:py-10 scroll-mt-16"
      id="skills"
    >
      <h1 className={title()}>Skills</h1>

      <div className="flex flex-wrap gap-8 justify-around items-center max-w-sm lg:max-w-5xl">
        <div className="flex flex-col gap-4">
          <h2 className={`${subtitle()} text-center capitalize font-semibold`}>
            languages
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-4 lg:max-w-5xl">
            {skillsConfig.languages.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className={`${buttonStyles({
                      variant: "solid",
                      radius: "sm",
                      color: "primary",
                    })} min-w-unit-40 lg:min-w-unit-48`}
                  >
                    {skill}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${subtitle()} text-center capitalize font-semibold`}>
            framework
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-4 lg:max-w-5xl">
            {skillsConfig.framework.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className={`${buttonStyles({
                      variant: "solid",
                      radius: "sm",
                      color: "primary",
                    })} min-w-unit-40 lg:min-w-unit-48`}
                  >
                    {skill}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${subtitle()} text-center capitalize font-semibold`}>
            tools
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-4 lg:max-w-5xl">
            {skillsConfig.tools.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className={`${buttonStyles({
                      variant: "solid",
                      radius: "sm",
                      color: "primary",
                    })} min-w-unit-40 lg:min-w-unit-48`}
                  >
                    {skill}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${subtitle()} text-center capitalize font-semibold`}>
            design
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-4 lg:max-w-5xl">
            {skillsConfig.design.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className={`${buttonStyles({
                      variant: "solid",
                      radius: "sm",
                      color: "primary",
                    })} min-w-unit-40 lg:min-w-unit-48`}
                  >
                    {skill}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
