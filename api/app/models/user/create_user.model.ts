import { pool } from "$postgres/postgres";
import type { UserCreate } from "$types/user/user.dto";
import type { UserRow } from "$types/user/user.entity";

const create_user_model = async (data: UserCreate): Promise<UserRow | null> => {
  const { name, email, password } = data;

  const result = await pool.query<UserRow>(
    `
    INSERT INTO users (name, email, password) 
    VALUES ($1, $2, $3) 
    RETURNING id, name, email, created_at
    `,
    [name, email, password],
  );

  const user = result.rows[0];

  return user || null;
};

export default create_user_model;
