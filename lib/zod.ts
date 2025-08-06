import z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().min(3, "Email must be at least 3 characters long"),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(100, "Message must be at most 100 characters long"),
});
