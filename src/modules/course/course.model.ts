import mongoose, { mongo } from "mongoose";
import { ICourse } from "./course.interface.js";
import slugify from "slugify";

const courseSchema = new mongoose.Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    price: {
      type: Number,
      default: 0,
      min: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    totalDuration: {
      type: Number,
      default: 0,
    },

    totalLessons: {
      type: Number,
      default: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

///////////////////////////////////////////////////////
/////////////////////////////////////////
////////// indexes in course schema.
courseSchema.index({
  title: "text",
  description: "text",
});

courseSchema.index({
  category: 1,
});

courseSchema.index({
  instructor: 1,
});

courseSchema.index({
  level: 1,
});

courseSchema.index({
  isPublished: 1,
});

///////////////////////////////////////////////////////
/////////////////////////////////////////
////////// middleware in course schema.
courseSchema.pre("save", function () {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }
});

const Course = mongoose.model<ICourse>("Course", courseSchema);
export default Course;
