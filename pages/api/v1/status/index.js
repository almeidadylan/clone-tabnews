import database from "infra/database.js";
import getPostgresVersion from "/pages/api/v1/status/postgres/version/getPostgresVersion.js";
import getMaxConnections from "./postgres/max_connections/maxConections";
import { act } from "react";
import getActiveConnections from "./postgres/active_connections/active_connections";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgres_Version = await getPostgresVersion();
  const max_connections = await getMaxConnections();
  const active_connections = await getActiveConnections();

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgres_Version,
    db_max_connections: max_connections,
    db_active_connections: active_connections,
  });
}

export default status;
