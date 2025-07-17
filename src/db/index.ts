import { DrizzleError } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const setup = () => {
  if (!process.env.DATABASE_URL 
    || !process.env.DATABASE_USER 
    || !process.env.DATABASE_PASSWORD
    || !process.env.DATABASE_NAME
    || !process.env.DATABASE_PORT) {
    console.error("env bar is not set correctly, returning dummy db object");
    return {
      select: () => ({
        from: () => Promise.resolve([]),
      }),
      insert: () => {
        return {
          values: () => ({ returning: () => Promise.resolve([]) })
        }
      }
    };
  }

  const queryClient = postgres(process.env.DATABASE_URL, {
    idle_timeout: 60,
  });
  const db = drizzle(queryClient);
  return db;
};

export default setup();
