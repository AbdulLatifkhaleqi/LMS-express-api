import { Types } from "mongoose";

export interface IQuizAttempt {
  quiz: Types.ObjectId;

  student: Types.ObjectId;

  score: number;

  passed: boolean;
}
