import { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/utils/catch-async.js";
import { AuthService } from "./auth.service.js";

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// register controller.
const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  res.status(201).json({
    token: result.token,
    success: true,
    message: "User registered successfully",
    data: result.user,
  });
});

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// login controller.
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  res.status(200).json({
    success: true,
    token: result.token,
    message: "User logged in successfully",
    data: result.user,
  });
});

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// forgot password.
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const email = req.body.email;

  const result = await AuthService.forgotPassword(email);

  res.status(200).json({
    success: true,
    message: " Reset token generated. ",
    data: result,
  });
});

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// reset password.
const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const token = req.params.token as string;

  const { password } = req.body;

  await AuthService.resetPassword(token, password);

  res.status(200).json({
    success: true,
    message: "Password reset successful",
  });
});

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// change password.
const changePassword = catchAsync(async (req: any, res: Response) => {
  const userId = req.user.id;

  const { currentPassword, newPassword } = req.body;

  await AuthService.changePassword(userId, currentPassword, newPassword);

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
});

export const AuthController = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  changePassword,
};
