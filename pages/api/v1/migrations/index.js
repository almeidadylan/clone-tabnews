import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

async function migrations(request, response) {
  console.log("NODE_ENV: ", process.env.NODE_ENV);
  console.log("process.env envionment variables:", {
    process_env: process.env.NODE_ENV,
    postgres_host: process.env.POSTGRES_HOST,
    postgres_db: process.env.POSTGRES_DB,
    postgres_user: process.env.POSTGRES_USER,
    postgres_password: process.env.POSTGRES_PASSWORD,
    postgres_port: process.env.POSTGRES_PORT,
    database_url: process.env.DATABASE_URL,
  });
  if (request.method === "GET") {
    console.log("Entrou no GET");

    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    console.log("Entrou no POST");

    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });
    return response.status(200).json(migrations);
  }

  return response.status(405).json({ message: "Method not allowed" });
}

export default migrations;
