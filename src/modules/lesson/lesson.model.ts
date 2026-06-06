import mongoose from "mongoose";
import { ILesson } from "./lesson.interface.js";

const lessonSchema = new mongoose.Schema<ILesson>(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
      index: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    order: {
      type: Number,
      required: true,
    },

    isPreviewFree: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

lessonSchema.index({
  section: 1,
  order: 1,
});

export const LessonModel = mongoose.model<ILesson>("Lesson", lessonSchema);
