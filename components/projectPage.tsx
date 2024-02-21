import { title } from "@/components/primitives";

export default function ProjectsPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="project"
    >
      <h1 className={title()}>Projects</h1>
    </section>
  );
}
