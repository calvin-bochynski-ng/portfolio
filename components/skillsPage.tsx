import { title } from "@/components/primitives";

export default function SkillsPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-28 h-screen"
      id="skills"
    >
      <h1 className={title()}>Skills</h1>
    </section>
  );
}
