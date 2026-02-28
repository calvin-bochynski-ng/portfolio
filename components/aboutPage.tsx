"use client";
import { subtitle, title } from "@/components/primitives";
// import profilePicture from "@/public/Calvin Bochynski-Ng-portrait.jpg";
import profilePicture from "@/public/Calvin-Bochynski-Ng-portrait.jpg";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-4  mb-48 lg:h-svh "
      id="about"
    >
      <h1 className={title()}>About me</h1>

      <div className="flex-col flex max-w-sm my-4 lg:flex-row lg:max-w-5xl text-justify justify-center items-center gap-4 lg:gap-32">
        <Image
          src={profilePicture.src}
          alt="Calvin Bochynski-Ng"
          width={300}
          height={600}
          radius="sm"
        />
        <div className="lg:max-w-xl">
          <p className={subtitle()}>
            Front-End Engineer based in Warsaw, Poland and specialising in React and TypeScript, building production-grade, data-rich UIs in real-time environments. Currently working within an Nx monorepo, owning a frontend application end to end, including feature delivery and automated testing with Jest and Cypress.
          </p>
          <p className={subtitle()}>
            I focus on turning complex analytical data into clear, high-performance user experiences and collaborate closely with backend, data, and design teams in Agile environments. I also deliver freelance React projects using TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
