import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";
import { createCategorySchema } from "./category.validation.js";
import { CategoryController } from "./category.controller.js";

const router = express.Router();

router.post(
  "/",
  validateRequest(createCategorySchema),
  CategoryController.createCategory,
);
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getSingleCategory);

export const CategoryRoutes = router;
