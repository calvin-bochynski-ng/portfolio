"use client";

import { title } from "@/components/primitives";
import { skillsConfig } from "@/config/skills";
import { useActiveSectionContext } from "@/context/active-section-context";
import { button as buttonStyles } from "@nextui-org/theme";
import { useEffect } from "react";
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
      className="flex flex-col items-center justify-center gap-16 py-8 md:py-10 scroll-mt-28 h-screen"
      id="skills"
    >
      <h1 className={title()}>Skills</h1>

      <div className="flex flex-wrap gap-4 justify-around items-center max-w-sm lg:max-w-5xl">
        {skillsConfig.skills.map((skill, index) => {
          return (
            <div
              key={index}
              className={`${buttonStyles({
                variant: "solid",
                radius: "sm",
                color: "primary",
              })} min-w-unit-40 lg:min-w-unit-48`}
            >
              <h1>{skill.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
