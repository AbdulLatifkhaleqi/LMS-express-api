import mongoose from "mongoose";
import { IQuiz } from "./quiz.interface.js";

const quizSchema = new mongoose.Schema<IQuiz>(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    passingScore: {
      type: Number,
      default: 50,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const QuizModel = mongoose.model<IQuiz>("Quiz", quizSchema);
