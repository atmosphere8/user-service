import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const remove_user_model = async (
  id: UserRow["id"],
): Promise<UserRow | null> => {
  const { rows } = await pool.query<UserRow>(
    `
    DELETE FROM users
    WHERE id = $1
    RETURNING id, name, email, role, created_at
    `,
    [id],
  );

  return rows[0] || null;
};

export default remove_user_model;
