import mongoose from "mongoose";
import slugify from "slugify";
import { ICategory } from "./category.interface.js";

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 100,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// some middlewares
categorySchema.pre("save", function () {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
    });
  }
});

///////////////////////////////////////////////////////
/////////////////////////////////////////////
///////////// add indexes in category.
categorySchema.index({
  name: 1,
});

categorySchema.index({
  slug: 1,
});

categorySchema.index({
  isActive: 1,
});

export const CategoryModel = mongoose.model<ICategory>(
  "Category",
  categorySchema,
);
