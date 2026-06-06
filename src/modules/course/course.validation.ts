import { z } from "zod";

export const createCourseSchema = z.object({
  body: z.object({
    title: z.string().trim().min(5, "Title is required").max(150),

    description: z.string().trim().min(20).max(5000),

    thumbnail: z.url("Invalid thumbnail url"),

    category: z.string().min(1),

    level: z.enum(["beginner", "intermediate", "advanced"]),

    price: z.number().min(0),
  }),
});

export const updateCourseSchema = z.object({
  body: z.object({
    title: z.string().trim().min(5).max(150).optional(),

    description: z.string().min(20).max(5000).optional(),

    thumbnail: z.url().optional(),

    category: z.string().optional(),

    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),

    price: z.number().min(0).optional(),

    isPublished: z.boolean().optional(),
  }),
});
