import type { UserRow } from "$types/user/user.entity";

export type UserInsert = Omit<UserRow, "id" | "created_at">;
