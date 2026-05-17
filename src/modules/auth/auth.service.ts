import AppError from "../../shared/errors/app.error.js";
import { generateToken } from "../../shared/utils/jwt.js";
import { UserRepository } from "../user/user.repository.js";
import { LoginInput, RegisterInput } from "./auth.interface.js";
import { AuthRepository } from "./auth.repository.js";
import crypto from "crypto";

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// register user.
const register = async (payload: RegisterInput) => {
  const existUser = await AuthRepository.findUserByEmail(payload.email);

  if (existUser) {
    throw new AppError("This email address already exist.", 409);
  }

  const user = await AuthRepository.createUser(payload);

  const token = generateToken(user._id.toString(), user.email, user.role);

  return {
    token,
    user: {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  };
};

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// login user.
const login = async (payload: LoginInput) => {
  const user = await AuthRepository.findUserByEmail(payload.email);

  if (!user || !(await user.comparePassword(payload.password))) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken(user._id.toString(), user.email, user.role);

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
    },
  };
};

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// forgot password.
const forgotPassword = async (email: string) => {
  const user = await AuthRepository.findUserByEmail(email);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  return resetToken;
};

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// reset password.
const resetPassword = async (token: string, password: string) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await AuthRepository.findUserByResetToken(hashedToken);

  if (!user) {
    throw new AppError("Invalid or expired token", 400);
  }

  user.password = password;

  user.passwordResetToken = undefined;

  user.passwordResetExpires = undefined;

  await user.save();

  return true;
};

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// change password.
const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
) => {
  const user = await UserRepository.findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const isMatched = await user.comparePassword(currentPassword);

  if (!isMatched) {
    throw new AppError("Current password incorrect", 401);
  }

  user.password = newPassword;

  await user.save();
};

export const AuthService = {
  register,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
};
