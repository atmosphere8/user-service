import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";

const get_email = async (email: UserRow["email"]): Promise<UserRow | null> => {
  const { rows } = await pool.query<UserRow>(
    `
    SELECT id, name, email, role, password, created_at
    FROM users  
    WHERE email = $1
    LIMIT 1
    `,
    [email],
  );

  return rows[0] || null;
};

export default get_email;
