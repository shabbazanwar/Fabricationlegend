import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Copy .env.example to .env.local.");
}

// Reused across hot reloads in dev so each edit doesn't open a new pool.
const globalForDb = globalThis as unknown as {
  client: ReturnType<typeof postgres> | undefined;
};

// prepare:false keeps this compatible with transaction-mode poolers (Neon, PgBouncer).
const client =
  globalForDb.client ?? postgres(connectionString, { prepare: false, max: 5 });

if (process.env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
