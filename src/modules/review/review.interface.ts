import { Types } from "mongoose";

export interface IReview {
  student: Types.ObjectId;
  course: Types.ObjectId;
  rating: number;
  comment: string;
}
