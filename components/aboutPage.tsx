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
            Having recently graduated from the BrainStation Bootcamp, I am
            excited to embark on a new journey in the tech industry. With a
            strong skill set in React, TypeScript, JavaScript, Node.js and
            MySQL, I am prepared to excel in Front-End Development. My
            background includes over 5 years of experience in Hardware RF
            Antenna Engineering, complemented by a PhD in Electronic
            Engineering. This unique combination of technical expertise and
            academic achievement positions me well as a Junior Web Developer,
            with aspirations to grow into a product owner role in the future.
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
