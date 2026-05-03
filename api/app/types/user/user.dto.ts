import type { UserRow } from "$types/user/user.entity";

export type UserPublic = Omit<UserRow, "password">;

export type UserCreate = Omit<UserRow, "id" | "created_at">;
