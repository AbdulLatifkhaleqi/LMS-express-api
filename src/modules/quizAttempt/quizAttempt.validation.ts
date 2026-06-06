import { z } from "zod";

export const createAttemptSchema = z.object({
  body: z.object({
    quiz: z.string(),

    score: z.number().min(0).max(100),
  }),
});
