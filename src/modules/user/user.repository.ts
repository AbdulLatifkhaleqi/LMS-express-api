import { User } from "./user.model.js";

const findUserById = (userId: string) => {
  return User.findById(userId).select("firstName lastName  email  createdAt");
};

export const UserRepository = {
  findUserById,
};
