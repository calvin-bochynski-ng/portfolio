"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { subtitle, title } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { experienceConfig } from "@/config/experience";

export default function ExperiencePage() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Experiences");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-16 py-8 my-16 md:py-10 scroll-mt-28 rounded-lg"
      id="experiences"
    >
      <h1 className={title()}>Experiences</h1>
      <VerticalTimeline animate={false}>
        {experienceConfig.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                date={experience.date}
                icon={experience.icon.image}
                iconStyle={{
                  boxShadow: "none",
                }}
                iconClassName={`${experience.icon.name === "work" ? "vertical-timeline-element-icon--work" : "vertical-timeline-element-icon--education"}`}
              >
                <div className="flex flex-col justify-between">
                  <h3
                    className={`${subtitle()} font-bold capitalize text-gray-900 dark:text-white`}
                  >
                    {experience.title}
                  </h3>
                  <p className="!font-normal !mt-0 !text-sm">
                    {experience.location}
                  </p>
                  <ul className="flex flex-col list-disc !mt-4 text-gray-900 dark:text-gray-300 gap-4 pl-5 my-4">
                    {experience.description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
