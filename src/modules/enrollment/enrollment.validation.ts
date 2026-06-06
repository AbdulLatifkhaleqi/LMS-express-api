import { z } from "zod";

export const enrollSchema = z.object({
  body: z.object({
    course: z.string(),
  }),
});
