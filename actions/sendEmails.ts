"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/utils/utils";
import ContactFormEmail from "@/components/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Server side");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["calvinng1993@gmail.com"],
      subject: "Message from Contact Form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
