import AppError from "$middlewares/error/app-error.class";
import { create_user_model, find_user_model } from "$models/index.model";
import type { UserCreate, UserPublic } from "$types/user/user.dto";
import bcrypt from "bcrypt";

const salt_rounds = 12;
const no_spaces_regex = /^\S+$/;
const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const create_user_service = async (data: UserCreate): Promise<UserPublic> => {
  const { password, email, name } = data;

  const password_trimmed = password?.trim();
  const email_trimmed = email?.trim();
  const name_trimmed = name?.trim();

  if (!password_trimmed || !email_trimmed || !name_trimmed) {
    throw new AppError("🔴 Name, email and password are required", 400);
  }

  if (
    !no_spaces_regex.test(password_trimmed) ||
    !no_spaces_regex.test(email_trimmed) ||
    !no_spaces_regex.test(name_trimmed)
  ) {
    throw new AppError("🔴 Fields cannot contain spaces", 400);
  }

  if (!email_regex.test(email_trimmed)) {
    throw new AppError("🔴 Invalid email format", 400);
  }

  if (password_trimmed.length < 6) {
    throw new AppError("🔴 Password must be at least 6 characters long", 400);
  }

  const existing_user = await find_user_model(email_trimmed);
  if (existing_user) {
    throw new AppError("🔴 Email already in use", 409);
  }

  const hashed_password = await bcrypt.hash(password_trimmed, salt_rounds);

  const result = await create_user_model({
    name: name_trimmed,
    email: email_trimmed,
    password: hashed_password,
  });

  if (!result) {
    throw new AppError("🔴 Failed to create user", 500);
  }

  return result;
};

export default create_user_service;
