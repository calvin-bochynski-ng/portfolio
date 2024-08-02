"use client";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { FaFilePdf } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-16 scroll-mt-[100rem] h-svh"
      id="home"
    >
      <div className="inline-block max-w-lg text-center justify-center gap-8">
        <h1 className={title()}>
          Welcome! My name is
          <br />
          <span className={title({ color: "gradient" })}>
            Calvin Bochyński-Ng
          </span>
        </h1>

        <h2 className={`${subtitle({ class: "mt-8" })} capitalize !text-2xl`}>
          junior web developer
        </h2>
      </div>

      <div className="flex gap-3">
        <a
          className={`${buttonStyles({
            color: "primary",
            variant: "solid",
            radius: "md",
          })}  dark:bg-blue-600`}
          href={"/Resume-calvin-bochynski-ng-2024.pdf"}
          download
        >
          <FaFilePdf size={20} />
          Download CV
        </a>

        <a
          className={buttonStyles({ variant: "solid", radius: "md" })}
          href="#contact"
        >
          <FaPaperPlane size={20} />
          Contact Me
        </a>
      </div>
    </section>
  );
}
