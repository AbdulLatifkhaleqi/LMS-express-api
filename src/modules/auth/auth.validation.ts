import { email, z } from "zod";

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

//////////////////////////////////////////
//////////////// register schema.
export const loginSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});

//////////////////////////////////////////
//////////////// forgot password schema.
export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),
  }),
});

//////////////////////////////////////////
//////////////// reset password schema.
export const resetPasswordSchema = z.object({
  params: z.object({
    token: z.string(),
  }),
  body: z.object({
    password: z.string().min(6),
  }),
});

/////////////////////////////////////////
//////////////// change password schema.
export const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string(),
    newPassword: z.string().min(6),
  }),
});
