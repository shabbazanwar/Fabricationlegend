"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/db/schema";
import { checkRateLimit, clientKey } from "@/lib/rate-limit";
import { sendEnquiryNotification } from "@/lib/email";
import {
  contactSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Bots fill every field they find; humans never see this one.
  if (formData.get("_hp")) {
    return { status: "success", message: "Thanks, we'll be in touch shortly." };
  }

  const limit = checkRateLimit(await clientKey());
  if (!limit.allowed) {
    return {
      status: "error",
      message: `You've sent several enquiries already. Please try again in about ${limit.retryAfterMinutes} minutes, or call us instead.`,
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    // Browsers post "" for untouched optional inputs, but a missing field
    // arrives as null, which `.optional()` would reject.
    phone: formData.get("phone") ?? "",
    serviceInterest: formData.get("serviceInterest") ?? "",
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  const { name, email, phone, serviceInterest, message } = parsed.data;

  try {
    await db.insert(contactSubmissions).values({
      name,
      email,
      phone: phone || null,
      serviceInterest: serviceInterest || null,
      message,
    });
  } catch (error) {
    console.error("Failed to save contact submission", error);
    return {
      status: "error",
      message:
        "We couldn't send that just now. Please call us instead and we'll pick it up right away.",
    };
  }

  // The enquiry is already saved, so a failed notification must not surface
  // as an error to the visitor or make them submit again.
  try {
    await sendEnquiryNotification(parsed.data);
  } catch (error) {
    console.error("Failed to send enquiry notification", error);
  }

  return {
    status: "success",
    message: "Thanks, we've got your message and will be in touch shortly.",
  };
}
