import AppError from "../../shared/errors/app.error.js";
import { generateToken } from "../../shared/utils/jwt.js";
import { User } from "../user/user.model.js";

//////////////////////////////////////////////////////////
///////////////////////////////////////////
///////////////////// Interfaces
interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const authService = {
  register: async (payload: RegisterInput) => {
    const user = await User.create({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    });

    const token = generateToken(user._id.toString(), user.email, user.role);

    return {
      token,
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  },
  /////////////////////////////////////////////
  ///////////////////////////////////
  ///////////////// login user
  login: async (payload: LoginInput) => {
    const user = await User.findOne({
      email: payload.email,
    }).select("+password");

    if (!user) {
      throw new AppError("Invalid email or password", 401);
    }

    const isPasswordMatched = await user.comparePassword(payload.password);

    if (!isPasswordMatched) {
      throw new AppError("Invalid email or password", 401);
    }

    const token = generateToken(user._id.toString(), user.email, user.role);

    return {
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    };
  },
};
