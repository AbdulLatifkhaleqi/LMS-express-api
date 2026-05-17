import { Types } from "mongoose";
import { UserRole } from "../../shared/enums/user-role.enum.js";

export interface IUser {
  _id?: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  avatar?: string;
  isVerified: boolean;

  createdAt?: Date;
  updatedAt?: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
  createPasswordResetToken(): string;
}
