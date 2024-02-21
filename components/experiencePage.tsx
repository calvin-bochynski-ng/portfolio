"use client";
import { title } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ExperiencePage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-28 h-screen"
      id="experience"
    >
      <h1 className={title()}>Experience</h1>
    </section>
  );
}
