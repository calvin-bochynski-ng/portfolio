"use client";
import { subtitle, title } from "@/components/primitives";
// import profilePicture from "@/public/Calvin Bochynski-Ng-portrait.jpg";
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
      className="flex flex-col items-center justify-center gap-4 scroll-mt-28 mb-48 lg:h-svh "
      id="about"
    >
      <h1 className={title()}>About me</h1>

      <div className="flex-col flex max-w-sm my-4 lg:flex-row lg:max-w-5xl text-justify justify-center items-center gap-4 lg:gap-32">
        <Image
          as={NextImage}
          src="/Calvin Bochynski-Ng-portrait.jpg"
          alt="Calvin Bochynski-Ng"
          width={300}
          height={500}
          radius="sm"
        />
        <div className="lg:max-w-xl">
          <p className={subtitle()}>
            With a recent graduation from BrainStation Bootcamp under my belt, I
            am excited to embark on a new journey in the industrial landscape.
            Equipped with a robust skill set encompassing HTML, CSS, React,
            Javascript, Node.js, Express, and MySQL, I am ready to make waves in
            Front-End Development. Building upon over 5 years of experience in
            Hardware RF Antenna Engineering and backed by a PhD in Electronic
            Engineering, I bring a unique blend of technical prowess and
            academic excellence to the table.
          </p>
          <p className={subtitle()}>
            My background in project leadership, hands-on experiences, and
            collaborative teamwork has primed me to tackle the intricacies of
            both Front-End and Back-End development with fervor. Eager to
            contribute to cutting-edge software solutions, I am poised to
            embrace the challenges and opportunities that lie ahead in this
            dynamic field.
          </p>
        </div>
      </div>
    </section>
  );
}
