import jwt from "jsonwebtoken";

const secret = process.env.JWT_ACCESS_SECRET;

if (!secret) {
  throw new Error("JWT_ACCESS_SECRET is missing");
}

export const generateToken = (
  id: string,
  email: string,
  role: string,
): string => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    secret,
    {
      expiresIn: "7d",
    },
  );
};
