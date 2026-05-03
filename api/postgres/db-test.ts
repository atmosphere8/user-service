import { pool } from "$postgres/postgres";

// Test database connection on startup

export default () => {
  pool
    .query("SELECT 1 as ok")
    .then(() => console.log("🟢 Database connection successful"))
    .catch((error) => console.error("🔴 Database connection failed:", error));
};
