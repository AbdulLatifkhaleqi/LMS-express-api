import mongoose from "mongoose";
import { IQuestion } from "./question.interface.js";

const questionSchema = new mongoose.Schema<IQuestion>(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    options: [
      {
        type: String,
        required: true,
      },
    ],

    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

questionSchema.index({
  quiz: 1,
});

export const QuestionModel = mongoose.model<IQuestion>(
  "Question",
  questionSchema,
);
