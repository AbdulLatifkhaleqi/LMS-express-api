import express from "express";
import { UserController } from "./user.controller.js";
import { authMiddlware } from "../../middlewares/auth.middlwares.js";
import { authorize } from "../../middlewares/authorize.middleware.js";

const router = express.Router();

router.get("/user/me", authMiddlware, UserController.getUser);
router.get("/", authMiddlware, authorize("admin"), UserController.getAllUsers);

export default router;
