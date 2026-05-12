import type { UserRow } from "$types/user/user.entity";

export type UserPublicResponse = Omit<UserRow, "password">;

export type UserCreateData = Omit<UserRow, "id" | "created_at" | "role">;

export type UserCreateResponse = Omit<UserCreateData, "password">;

export type UserLoginData = Omit<
  UserRow,
  "id" | "name" | "created_at" | "role"
>;

export type UserLoginResponse = {
  user: UserPublicResponse;
  token: string;
};
