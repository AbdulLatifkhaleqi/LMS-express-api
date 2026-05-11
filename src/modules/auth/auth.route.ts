import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
import { loginController, registerController } from "./auth.controller.js";

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
router.post("/register", validateRequest(registerSchema), registerController);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 */
router.post("/login", validateRequest(loginSchema), loginController);

export default router;
