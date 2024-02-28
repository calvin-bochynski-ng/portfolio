"use client";
import { subtitle, title } from "@/components/primitives";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaPaperPlane } from "react-icons/fa6";
import { sendEmail } from "@/actions/sendEmails";
import toast from "react-hot-toast";
import Footer from "./footer";

export default function ContactPage() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <>
      <section
        ref={ref}
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 scroll-mt-12 h-svh"
        id="contact"
      >
        <h1 className={title()}>Contact</h1>
        <p className={`${subtitle()} text-center text-grey-700`}>
          Please contact me directly at{" "}
          <a className="underline" href="mailto:calvinng1993@gmail.com">
            calvinng1993@gmail.com
          </a>{" "}
          or throught the form below:
        </p>

        <form
          ref={formRef}
          className="w-full sm:max-w-xl lg:max-w-xl flex flex-col items-center gap-8 mt-10"
          action={async (formData) => {
            await sendEmail(formData);
            formRef.current?.reset();
            toast.success("Email received.");
          }}
        >
          <Input
            type="email"
            label="Email"
            variant="faded"
            isRequired
            className="h-14"
            maxLength={500}
            name="senderEmail"
          />
          <Textarea
            variant="faded"
            label="Description"
            className="w-full lg:max-w-5xl"
            isRequired
            maxRows={3}
            name="senderMessage"
            maxLength={5000}
          />
          <Button
            className={`${buttonStyles({ variant: "solid", radius: "md" })} w-full max-w-sm sm:max-w-sm lg:max-w-sm  bg-gray-200 dark:bg-blue-600 transition`}
            type="submit"
          >
            Submit <FaPaperPlane />
          </Button>
        </form>
        <Footer />
      </section>
    </>
  );
}
