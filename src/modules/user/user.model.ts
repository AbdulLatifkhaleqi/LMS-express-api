import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { UserRole } from "../../shared/enums/user-role.enum.js";
import { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.STUDENT,
    },
    avatar: {
      type: String,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

////////////////////////////////////////
/////////////////////////////////
//////////// user middlewares.
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(
    this.password,
    Number(process.env.BCRYPT_SALT_ROUNDS),
  );
});

export const User = model<IUser>("User", userSchema);
