import { Types } from "mongoose";

export interface IQuestion {
  quiz: Types.ObjectId;

  title: string;

  options: string[];

  correctAnswer: string;
}
