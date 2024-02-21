"use client";
import { title } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ContactPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-28 h-screen"
      id="contact"
    >
      <h1 className={title()}>Contact</h1>
    </section>
  );
}
