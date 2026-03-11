import database from "infra/database.js";
//import getPostgresVersion from "/pages/api/v1/status/postgres/version/getPostgresVersion.js";
//import getMaxConnections from "./postgres/max_connections/maxConections";
//import { act } from "react";
//import getActiveConnections from "./postgres/active_connections/active_connections";

async function status(request, response) {
  // eslint-disable-next-line no-unused-vars
  let password = "local_password";
  // eslint-disable-next-line no-unused-vars
  let awsSecretKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
  // eslint-disable-next-line no-unused-vars
  const aws_config = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1",
  };
  // eslint-disable-next-line no-unused-vars
  const postgres_url_connection =
    "postgresql://johndev:123456@localhost:5432/users";
  // eslint-disable-next-line no-unused-vars
  const url =
    "postgresql://dbadmin:mYf4k3P4ssw0rd_99@my-production-db.czoxxxxxxxx.us-east-1.rds.amazonaws.com:5432/prod_database";

  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;"
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;

/*
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
*/
