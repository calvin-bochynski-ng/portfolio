"use client";
import { title, subtitle } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/config/project";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "./icons";
import { FaGlobe } from "react-icons/fa";

export default function ProjectsPage() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-4 scroll-mt-28"
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

function Project({
  title,
  description,
  tags,
  imageUrl,
  gitRepo,
  website,
}: ProjectProps) {
  return (
    <article
      className=" group relative flex flex-col items-center bg-gray-200/20 border border-gray-200 shadow-md hover:bg-white hover:border
     hover:border-gray-300 dark:border-none dark:bg-gray-600/20 dark:hover:bg-gray-600/40 transition rounded-lg sm:items-start lg:max-w-5xl
      overflow-hidden sm:pr-8 w-full h-[39rem] sm:h-[37rem] md:h-[32rem] lg:h-[27rem] gap-16 lg:odd:pl-[7rem]"
    >
      <div
        className=" p-4 pb-0 sm:p-4 sm:pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col  sm:group-odd:ml-[15rem] md:group-odd:ml-[24rem] 
      lg:group-odd:ml-[24rem]"
      >
        <h3
          className={`${subtitle()} font-semibold dark:text-white text-slate-950`}
        >
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-gray-900 dark:text-gray-300">
          {description}
        </p>
        <div className="flex justify-start items-center gap-4 mb-4 ">
          {gitRepo && (
            <Link
              isExternal
              className={`${buttonStyles({
                variant: "solid",
                radius: "md",
                size: "md",
              })} opacity-0 group-hover:opacity-100 bg-gray-200 dark:bg-gray-600 transition mt-4`}
              href={gitRepo}
            >
              <GithubIcon size={20} />
              GitHub Repo
            </Link>
          )}

          {website && (
            <Link
              isExternal
              className={`${buttonStyles({
                variant: "solid",
                radius: "md",
                size: "md",
              })} opacity-0 group-hover:opacity-100 bg-gray-200 dark:bg-blue-600 transition mt-4`}
              href={website}
            >
              <FaGlobe size={20} />
              Website
            </Link>
          )}
        </div>

        <ul className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`${buttonStyles({
                variant: "faded",
                radius: "md",
                size: "sm",
              })} border-blue-500/50`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={` sm:absolute -bottom-64 sm:translate-y-0 sm:-right-32 md:-right-52 lg:-right-52 sm:top-8 sm:w-3/5 group-odd:right-[initial]   sm:group-hover:-translate-x-3  md:group-odd:pl-24  sm:group-hover:translate-y-3 sm:group-odd:-left-40
        lg:group-odd:-left-52 sm:group-hover:-rotate-2 sm:group-hover:scale-110 transition sm:group-hover:group-odd:translate-x-3 
        sm:group-hover:group-odd:rotate-2 group-hover:-translate-y-8 group-hover:rotate-2 
        ${!imageUrl.desktop ? "sm:-ml-4 lg:ml-20" : ""}
        
        `}
      >
        <Image
          src={!imageUrl.mobile ? imageUrl.desktop.src : imageUrl.mobile.src}
          alt={title}
          radius="sm"
          width={400}
          height={450}
          className="opacity-1 lg:hidden"
          shadow="sm"
        />

        <Image
          src={!imageUrl.desktop ? imageUrl.mobile.src : imageUrl.desktop.src}
          alt={title}
          radius="sm"
          width={!imageUrl.desktop ? 400 : 600}
          height={450}
          className="opacity-1 hidden lg:flex"
          shadow="sm"
        />
      </div>
    </article>
  );
}
