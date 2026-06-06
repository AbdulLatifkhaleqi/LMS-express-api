import { Types } from "mongoose";

export interface IQuiz {
  lesson: Types.ObjectId;
  title: string;
  passingScore: number;
}
