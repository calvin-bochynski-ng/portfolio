import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 scroll-mt-28 h-screen"
      id="about"
    >
      <h1 className={title()}>About Me</h1>
    </section>
  );
}
