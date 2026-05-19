import { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/utils/catch-async.js";
import { UserService } from "./user.service.js";

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// getUser controller.
const getUser = catchAsync(async (req: any, res: Response) => {
  const userId = req.user.id;
  const user = await UserService.getUserProfile(userId);

  res.status(200).json({
    success: true,
    message: "Profile retrieved uccessfully",
    data: user,
  });
});

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// get users controller.
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();

  res.status(200).json({
    success: true,

    results: users.length,

    data: users,
  });
});
export const UserController = {
  getUser,
  getAllUsers,
};
