import mongoose from "mongoose";
import { IEnrollment } from "./enrollment.interface.js";

const enrollmentSchema = new mongoose.Schema<IEnrollment>(
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

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    enrolledAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

enrollmentSchema.index(
  {
    student: 1,
    course: 1,
  },
  {
    unique: true,
  },
);

export const EnrollmentModel = mongoose.model<IEnrollment>(
  "Enrollment",
  enrollmentSchema,
);
