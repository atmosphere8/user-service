import { get_email } from "$models/index.model";
import type { UserLoginData, UserLoginResponse } from "$types/user/user.dto";
import AppError from "$middlewares/error/app-error.class";
import bcrypt from "bcrypt";
import type { UserTokenData } from "$types/user/user.type";

import jwt from "jsonwebtoken";
import { jwt_secret } from "$config/env";

const login_user_service = async (
  data: UserLoginData,
): Promise<UserLoginResponse> => {
  const { email, password } = data;

  const password_trimmed = password?.trim();
  const email_trimmed = email?.trim();

  if (!email_trimmed || !password_trimmed) {
    throw new AppError("🔴 Email and password are required", 400);
  }

  const user = await get_email(email_trimmed);

  if (!user) {
    throw new AppError("🔴 Invalid email or password", 401);
  }

  const is_match = await bcrypt.compare(password_trimmed, user.password);

  if (!is_match) {
    throw new AppError("🔴 Invalid email or password", 401);
  }

  const token = jwt.sign(
    { user_id: user.id, role: user.role } as UserTokenData,
    jwt_secret,
    {
      expiresIn: "15m",
    },
  );

  const { password: _, ...user_public } = user;

  return { user: user_public, token };
};

export default login_user_service;
