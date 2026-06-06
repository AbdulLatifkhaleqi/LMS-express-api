import { Request, Response } from "express";
import catchAsync from "../../shared/utils/catch-async.js";
import { CategoryService } from "./category.service.js";

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// create category.
const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body);

  res.status(200).json({
    success: true,
    message: "Category created successfully. ",
    data: result,
  });
});

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// get categories.
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories();

  res.status(200).json({
    success: true,
    message: "Categories fetch successfully. ",
    data: result,
  });
});

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// get category.
const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CategoryService.getSingleCategory(id.toString());

  res.status(200).json({
    success: true,
    message: "Categroy got successfully. ",
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
};
