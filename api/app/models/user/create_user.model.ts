import { pool } from "$postgres/postgres";
import type { UserRow } from "$types/user/user.entity";
import type { UserInsert } from "$app/types/user/user.model.types";

const create_user_model = async (data: UserInsert): Promise<UserRow | null> => {
  const { name, email, password, role } = data;

  const result = await pool.query<UserRow>(
    `
    INSERT INTO users (name, email, password, role) 
    VALUES ($1, $2, $3, $4) 
    RETURNING id, name, email, created_at
    `,
    [name, email, password, role],
  );

  const user = result.rows[0];

  return user || null;
};

export default create_user_model;
