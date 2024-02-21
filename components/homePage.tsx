import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon, PDFDownloadIcon } from "@/components/icons";
import { FaFilePdf } from "react-icons/fa6";
import clsx from "clsx";

export default function HomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 scroll-mt-28 h-screen "
      id="home"
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Welcome! My name is
          <br />
          <span className={title({ color: "gradient" })}>
            Calvin Bochyński-Ng
          </span>
        </h1>

        <h2 className={subtitle({ class: "mt-8" })}>
          Junior Software Engineer | Front End Developer
        </h2>
        <h2 className={subtitle({ class: "mt-8" })}>
          Turning idea and real world problems into real life products.
        </h2>
      </div>

      <div className="flex gap-3">
        <a
          className={buttonStyles({
            color: "primary",
            variant: "solid",
            radius: "full",
          })}
          href={"/calvin-bochynski-ng-cv-software-engineer-2024.pdf"}
          download
        >
          <FaFilePdf size={20} />
          Download CV
        </a>

        <Link
          isExternal
          className={buttonStyles({ variant: "solid", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
