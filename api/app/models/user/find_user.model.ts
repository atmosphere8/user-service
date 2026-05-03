import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const find_user_model = async (email: string): Promise<UserRow | null> => {
  const result = await pool.query<UserRow>(
    `
    SELECT id, name, email, created_at
    FROM users  
    WHERE email = $1
    LIMIT 1
    `,
    [email],
  );
  return result.rows[0] || null;
};

export default find_user_model;
