import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";
import {
  changePasswordSchema,
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from "./auth.validation.js";
import { AuthController } from "./auth.controller.js";
import { authMiddlware } from "../../middlewares/auth.middlwares.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest(registerSchema),
  AuthController.registerUser,
);

router.post("/login", validateRequest(loginSchema), AuthController.loginUser);

router.post(
  "/forgotPassword",
  validateRequest(forgotPasswordSchema),
  AuthController.forgotPassword,
);

router.patch(
  "/resetPassword/:token",
  validateRequest(resetPasswordSchema),
  AuthController.resetPassword,
);

router.patch(
  "/changePassword",
  authMiddlware,
  validateRequest(changePasswordSchema),
  AuthController.changePassword,
);

export default router;
