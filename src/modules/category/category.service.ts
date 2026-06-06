import AppError from "../../shared/errors/app.error.js";
import { ICategory } from "./category.interface.js";
import { CategoryRepository } from "./category.repository.js";

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// create category.
const createCategory = async (payload: Partial<ICategory>) => {
  const existing = await CategoryRepository.findByName(payload.name as string);

  if (existing) {
    throw new AppError("Category already exists", 401);
  }

  return CategoryRepository.createCategory(payload);
};

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// all categories.
const getAllCategories = async () => {
  return CategoryRepository.findAll();
};

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// get category.
const getSingleCategory = async (id: string) => {
  const category = await CategoryRepository.findById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// update category.
const updateCategory = async (id: string, payload: Partial<ICategory>) => {
  const category = await CategoryRepository.updateById(id, payload);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

/////////////////////////////////////////////////////
////////////////////////////////////////
/////////////// delete category.
const deleteCategory = async (id: string) => {
  const category = await CategoryRepository.deleteById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return null;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
