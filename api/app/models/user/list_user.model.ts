import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

export const list_user_model = async (): Promise<UserRow[]> => {
  const result = await pool.query<UserRow>(
    `
    SELECT id, name, email, created_at
    FROM users
    `,
  );
  return result.rows;
};

export default list_user_model;
