import pg from "pg";

import { postgres_url } from "$config/env";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: postgres_url,
  max: 10,
});
