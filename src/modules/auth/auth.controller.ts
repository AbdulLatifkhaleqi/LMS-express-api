import { Request, Response } from "express";
import catchAsync from "../../shared/utils/catch-async.js";
import { authService } from "./auth.service.js";

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
