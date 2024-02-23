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
      className="flex flex-col items-center gap-16 py-8 my-16 md:py-10 scroll-mt-28"
      id="experiences"
    >
      <h1 className={title()}>Experiences</h1>
      <VerticalTimeline animate={false} lineColor="#fafafa">
        {experienceConfig.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(75 85 99 / 0.2)",
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  border: "1px solid rgba(75, 85, 89, 0.2)",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgb(75, 85, 99, 0.8)",
                }}
                date={experience.date}
                icon={experience.icon.image}
                iconStyle={{
                  background: `${experience.icon.name === "work" ? "#12a150" : "#006FEE"}`,
                }}
              >
                <div className="flex flex-col justify-between">
                  <h3
                    className={`${subtitle()} font-bold capitalize text-white`}
                  >
                    {experience.title}
                  </h3>
                  <p className="!font-normal !mt-0 !text-sm">
                    {experience.location}
                  </p>
                  <ul className="flex flex-col list-disc !mt-4 text-gray-300 gap-4 pl-5 my-4">
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
