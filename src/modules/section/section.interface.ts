import { Types } from "mongoose";

export interface ISection {
  title: string;
  course: Types.ObjectId;
  order: number;
}
