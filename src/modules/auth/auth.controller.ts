import { Request, Response } from "express";
import catchAsync from "../../shared/utils/catch-async.js";
import { authService } from "./auth.service.js";

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// register controller.
export const registerController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await authService.register(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  },
);

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// login controller.
export const loginController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await authService.login(req.body);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: result,
    });
  },
);
