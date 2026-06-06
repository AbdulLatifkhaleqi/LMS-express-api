import { Types } from "mongoose";

export interface ILessonProgress {
  student: Types.ObjectId;
  lesson: Types.ObjectId;
  completed: boolean;
  watchedSeconds: number;
}
