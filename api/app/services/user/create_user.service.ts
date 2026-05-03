import { create_user_model, find_user_model } from "$models/index";
import type { UserCreate, UserPublic } from "$types/user/user.dto";
import bcrypt from "bcrypt";

const salt_rounds = 12;

const create_user_service = async (data: UserCreate): Promise<UserPublic> => {
  const { password, email, name } = data;

  if ([name, email, password].some((field) => !field?.trim())) {
    throw new Error("🔴 Name, email and password are required");
  }

  if (password.length < 6) {
    throw new Error("🔴 Password must be at least 6 characters long");
  }

  const existing_user = await find_user_model(email);
  if (existing_user) {
    throw new Error("🔴 Email already in use");
  }

  const hashed_password = await bcrypt.hash(password, salt_rounds);

  const result = await create_user_model({
    ...data,
    password: hashed_password,
  });

  return result;
};

export default create_user_service;
