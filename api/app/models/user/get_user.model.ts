import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const get_user_model = async (id: UserRow["id"]): Promise<UserRow | null> => {
  const { rows } = await pool.query<UserRow>(
    `
    SELECT id, name, email, role, created_at
    FROM users
    WHERE id = $1
    `,
    [id],
  );

  return rows[0] || null;
};

export default get_user_model;
