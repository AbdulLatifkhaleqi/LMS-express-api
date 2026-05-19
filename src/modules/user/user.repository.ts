import { User } from "./user.model.js";

const findUserById = (userId: string) => {
  return User.findById(userId).select("firstName lastName  email  createdAt");
};

const findAllUsers = () => {
  return User.find().select("-password").sort("-createdAt");
};

export const UserRepository = {
  findUserById,
  findAllUsers,
};
