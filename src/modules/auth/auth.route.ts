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

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Register user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: User already exists
 */
router.post(
  "/register",
  validateRequest(registerSchema),
  AuthController.registerUser,
);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Register user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: User already exists
 */
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
