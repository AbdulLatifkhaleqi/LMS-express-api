import mongoose from "mongoose";
import { IQuizAttempt } from "./quizAttempt.interface.js";

const quizAttemptSchema = new mongoose.Schema<IQuizAttempt>(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    passed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

quizAttemptSchema.index({
  student: 1,
  quiz: 1,
});

export const QuizAttemptModel = mongoose.model<IQuizAttempt>(
  "QuizAttempt",
  quizAttemptSchema,
);
