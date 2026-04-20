import { Pool } from "pg";

let pool: Pool; 

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 10,
    });
  }

  pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    // console.log({client})
    process.exit(-1);
  });

  pool.on("connect", (client) => {
    console.log("Database is connected successfully.");
  });

  return pool;
}