import { ICategory } from "./category.interface.js";
import { CategoryModel } from "./category.model.js";

const createCategory = (payload: Partial<ICategory>) => {
  return CategoryModel.create(payload);
};

const findByName = (name: string) => {
  return CategoryModel.findOne({
    name,
  });
};

const findById = (id: string) => {
  return CategoryModel.findById(id);
};

const findAll = () => {
  return CategoryModel.find();
};

const updateById = (id: string, payload: Partial<ICategory>) => {
  return CategoryModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteById = (id: string) => {
  return CategoryModel.findByIdAndDelete(id);
};

export const CategoryRepository = {
  createCategory,
  findByName,
  findById,
  findAll,
  updateById,
  deleteById,
};
