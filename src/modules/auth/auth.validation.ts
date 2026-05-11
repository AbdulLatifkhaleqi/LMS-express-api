import { z } from "zod";

//////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////// register schema.
export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(3, "First name is required"),

    lastName: z.string().min(3, "Last name is required"),

    email: z.email("Invalid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});

//////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////// register schema.
export const loginSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});
