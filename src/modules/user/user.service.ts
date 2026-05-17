import AppError from "../../shared/errors/app.error.js";
import { UserRepository } from "./user.repository.js";

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////// get user.
const getUserProfile = async (userId: string) => {
  const user = await UserRepository.findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const UserService = {
  getUserProfile,
};
