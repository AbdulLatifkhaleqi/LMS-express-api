import { NextFunction, Request, Response } from "express";
import AppError from "../shared/errors/app.error.js";
import { verifyToken } from "../shared/utils/jwt.js";

export const authMiddlware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    return next(new AppError("Unauthorized", 401));
  }

  const token = authHeaders.split(" ")[1];

  if (!token) {
    return next(new AppError("You are not logged in", 401));
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (err) {
    next(new AppError("Invalid token", 401));
  }
};
