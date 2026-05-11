import { Types } from "mongoose";
import { UserRole } from "../../shared/enums/user-role.enum.js";

export interface IUser {
  _id?: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  avatar?: string;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
