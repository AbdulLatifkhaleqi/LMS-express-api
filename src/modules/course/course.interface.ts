import { Types } from "mongoose";

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface ICourse {
  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  instructor: Types.ObjectId;

  category: Types.ObjectId;

  level: CourseLevel;

  price: number;

  isPublished: boolean;

  totalDuration: number;

  totalLessons: number;

  averageRating: number;

  totalStudents: number;
}
