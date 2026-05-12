import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";
import type { UserCreateData } from "$types/user/user.dto";

const create_user_model = async (
  data: UserCreateData & { role: string },
): Promise<UserRow | null> => {
  const { name, email, password, role } = data;

  const { rows } = await pool.query<UserRow>(
    `
    INSERT INTO users (name, email, password, role) 
    VALUES ($1, $2, $3, $4) 
    RETURNING id, name, email, role, created_at
    `,
    [name, email, password, role],
  );

  return rows[0] || null;
};

export default create_user_model;
