import { z } from "zod";

export const createQuizSchema = z.object({
  body: z.object({
    lesson: z.string(),

    title: z.string().trim().min(3).max(200),

    passingScore: z.number().min(1).max(100),
  }),
});
