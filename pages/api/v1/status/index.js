import database from "infra/database.js";
import getPostgresVersion from "/pages/api/v1/status/postgres/version/getPostgresVersion.js";
import getMaxConnections from "./postgres/max_connections/maxConections";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgres_Version = await getPostgresVersion();
  const max_connections = await getMaxConnections();

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgres_Version,
    db_max_connections: max_connections,
  });
}

export default status;
