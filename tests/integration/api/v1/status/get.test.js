import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // Data validation
  const responseBody = await response.json();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

/*
  // PostgreSQL Version validation
  const psqlVersionResponse = {
    simple_version: "16.0",
    full_version:
      "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit",
  };
  expect(responseBody.postgres_version).toBeDefined();
  expect(responseBody.postgres_version.simple_version).toBeDefined();
  expect(responseBody.postgres_version.simple_version).toEqual(
    psqlVersionResponse.simple_version
  );
  expect(responseBody.postgres_version.full_version).toBeDefined();
  expect(responseBody.postgres_version.full_version).toEqual(
    psqlVersionResponse.full_version
  );

  // Max Connections validation
  const maxConnectionsExpected = "100";
  expect(responseBody.db_max_connections).toBeDefined();
  expect(responseBody.db_max_connections).toBe(maxConnectionsExpected); //.toEqual("100");

  //active connections validation
  expect(responseBody.db_active_connections).toBeDefined();
  expect(typeof responseBody.db_active_connections).toBe("string");
*/
