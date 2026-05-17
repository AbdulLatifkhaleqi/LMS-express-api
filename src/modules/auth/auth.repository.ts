import { User } from "../user/user.model.js";
import { RegisterInput } from "./auth.interface.js";

const findUserByEmail = (email: string) => {
  return User.findOne({ email }).select("+password");
};

const createUser = (payload: RegisterInput) => {
  return User.create(payload);
};

const findUserByResetToken = (hashedToken: string) => {
  return User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: Date.now(),
    },
  }).select("+password");
};

export const AuthRepository = {
  findUserByEmail,
  createUser,
  findUserByResetToken,
};
