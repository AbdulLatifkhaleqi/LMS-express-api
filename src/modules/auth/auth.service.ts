import { User } from "../user/user.model.js";

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const authService = {
  register: async (payload: RegisterInput) => {
    const user = await User.create(payload);

    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  },
};
