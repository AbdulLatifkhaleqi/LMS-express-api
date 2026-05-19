import express from "express";
import { UserController } from "./user.controller.js";
import { authMiddlware } from "../../middlewares/auth.middlwares.js";
import { authorize } from "../../middlewares/authorize.middleware.js";

const router = express.Router();

/**
 * @openapi
 * /user/getProfile:
 *   post:
 *     summary: get user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: User already exists
 */
router.get("/user/me", authMiddlware, UserController.getUser);
router.get("/", authMiddlware, authorize("admin"), UserController.getAllUsers);

export default router;
