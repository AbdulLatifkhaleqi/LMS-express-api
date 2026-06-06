import { z } from "zod";

export const createQuestionSchema = z.object({
  body: z.object({
    quiz: z.string(),

    title: z.string().min(3).max(500),

    options: z.array(z.string()).min(2),

    correctAnswer: z.string(),
  }),
});
