import mongoose from "mongoose";
import { ILessonProgress } from "./lessonProgress.interface.js";

const lessonProgressSchema = new mongoose.Schema<ILessonProgress>(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    watchedSeconds: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

lessonProgressSchema.index({ student: 1, lesson: 1 }, { unique: true });
export const LessonProgressModel = mongoose.model<ILessonProgress>(
  "LessonProgress",
  lessonProgressSchema,
);
