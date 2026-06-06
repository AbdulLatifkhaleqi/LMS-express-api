import { z } from "zod";

export const createSectionSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3).max(100),
    course: z.string(),
    order: z.number().int().positive(),
  }),
});
