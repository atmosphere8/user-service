import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const get_user_model = async (id: UserRow["id"]): Promise<UserRow | null> => {
  const result = await pool.query<UserRow>(
    `
    SELECT id, name, email, created_at
    FROM users
    WHERE id = $1
    `,
    [id],
  );

  return result.rows[0] || null;
};

export default get_user_model;
