import {z} from "zod";

// Zod schema for contact form validation
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10,"Phone number should be at lest 10 digit"),
  message: z.string().min(2, "Message is too short").max(1000, "Message is too long"),
});

export type IContact = z.infer<typeof contactSchema>;
