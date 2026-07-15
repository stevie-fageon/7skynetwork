import { z } from "zod";

/**
 * Validation schema for the contact form.
 * Shared between the client (react-hook-form) and the server (API route),
 * so the rules always stay in sync.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more — at least 10 characters.")
    .max(5000, "That message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;
