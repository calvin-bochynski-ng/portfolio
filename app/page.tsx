import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import AboutPage from "@/components/aboutPage";
import ProjectsPage from "@/components/projectPage";

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-svh"
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

          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
      </section>
      <AboutPage />
      <ProjectsPage />
    </>
  );
}
