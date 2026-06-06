import { z } from "zod";

export const createReviewSchema = z.object({
  body: z.object({
    course: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().trim().min(3).max(1000),
  }),
});
