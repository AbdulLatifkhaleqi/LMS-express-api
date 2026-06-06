import { z } from "zod";

export const updateProgressSchema = z.object({
  body: z.object({
    lesson: z.string(),
    completed: z.boolean(),
    watchedSeconds: z.number().min(0),
  }),
});
