import { z } from "zod";

export const createLessonSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(150),

    description: z.string().optional(),

    section: z.string(),

    videoUrl: z.url(),

    duration: z.number().positive(),

    order: z.number().int().positive(),

    isPreviewFree: z.boolean(),
  }),
});
