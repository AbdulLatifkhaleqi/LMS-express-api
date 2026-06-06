import { Types } from "mongoose";

export interface ILesson {
  title: string;

  description?: string;

  section: Types.ObjectId;

  videoUrl: string;

  duration: number;

  order: number;

  isPreviewFree: boolean;
}
