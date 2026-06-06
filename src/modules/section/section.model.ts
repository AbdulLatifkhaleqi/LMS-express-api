import mongoose from "mongoose";
import { ISection } from "./section.interface.js";

const sectionSchema = new mongoose.Schema<ISection>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      index: true,
    },

    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

sectionSchema.index({
  course: 1,
  order: 1,
});

export const SectionModel = mongoose.model<ISection>("Section", sectionSchema);
