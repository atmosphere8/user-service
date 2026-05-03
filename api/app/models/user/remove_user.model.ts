import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const remove_user_model = async (
  id: UserRow["id"],
): Promise<UserRow | null> => {
  const result = await pool.query<UserRow>(
    `
    DELETE FROM users
    WHERE id = $1
    RETURNING id, name, email, created_at
    `,
    [id],
  );

  return result.rows[0] || null;
};

export default remove_user_model;
