import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  // Ugandan numbers get written many ways (+256..., 07..., spaced, dashed) so only reject obvious junk.
  phone: z
    .string()
    .trim()
    .max(30, "That phone number looks too long.")
    .optional()
    .or(z.literal("")),
  serviceInterest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please give us a little more detail (10 characters minimum).")
    .max(2000, "Please keep your message under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
};

export const INITIAL_CONTACT_STATE: ContactFormState = { status: "idle" };
