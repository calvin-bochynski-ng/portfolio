import { title } from "@/components/primitives";
import { skillsConfig } from "@/config/skills";
import { button as buttonStyles } from "@nextui-org/theme";

export default function SkillsPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-28 h-screen"
      id="skills"
    >
      <h1 className={title()}>Skills</h1>

      <div className="flex flex-wrap gap-4 justify-center items-center max-w-sm lg:max-w-5xl">
        {skillsConfig.skills.map((skill, index) => {
          return (
            <div
              key={index}
              className={buttonStyles({
                variant: "solid",
                radius: "full",
                color: "primary",
                size: "md",
              })}
            >
              <h1>{skill.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
