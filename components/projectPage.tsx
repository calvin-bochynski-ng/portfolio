"use client";
import { title } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/config/project";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function ProjectsPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-28 "
      id="projects"
    >
      <h1 className={title()}>Projects</h1>

      {projectsData.map((project, index) => (
        <Fragment key={index}>
          <Project {...project} />
        </Fragment>
      ))}
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>

      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Image
        src={!imageUrl.mobile ? imageUrl.desktop : imageUrl.mobile}
        alt={title}
        radius="sm"
        width={300}
        className="opacity-1 lg:hidden"
        as={NextImage}
      />

      <Image
        src={!imageUrl.desktop ? imageUrl.mobile : imageUrl.desktop}
        alt={title}
        radius="sm"
        width={600}
        className="opacity-1 hidden lg:block"
        as={NextImage}
      />
    </article>
  );
}
