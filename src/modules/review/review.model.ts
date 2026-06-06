import mongoose from "mongoose";
import { IReview } from "./review.interface.js";

const reviewSchema = new mongoose.Schema<IReview>(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

reviewSchema.index({ student: 1, course: 1 }, { unique: true });
export const ReviewModel = mongoose.model<IReview>("Review", reviewSchema);
