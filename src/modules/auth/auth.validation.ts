import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(3, "First name is required"),

    lastName: z.string().min(3, "Last name is required"),

    email: z.string().min(4, "Email is required").email("Invalid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});
