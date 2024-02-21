import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="about"
    >
      <h1 className={title()}>About</h1>
    </section>
  );
}
