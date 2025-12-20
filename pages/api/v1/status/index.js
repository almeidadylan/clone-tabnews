import database from "infra/database.js";
import getPostgresVersion from "/pages/api/v1/status/postgres/version/getPostgresVersion.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgres_Version = await getPostgresVersion();

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgres_Version,
  });
}

export default status;
