test("Get to apt/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  const psqlVersionResponse = {
    simple_version: "16.0",
    full_version:
      "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit",
  };
  expect(responseBody.postgres_version).toBeDefined();
  expect(responseBody.postgres_version.simple_version).toBeDefined();
  expect(responseBody.postgres_version.simple_version).toEqual("16.0");
  expect(responseBody.postgres_version.full_version).toBeDefined();
  expect(responseBody.postgres_version.full_version).toEqual(
    "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit"
  );

  const maxConnectionsExpected = 100;
  expect(responseBody.db_max_connections).toBeDefined();
  expect(responseBody.db_max_connections).toBe("100"); //.toEqual("100");

});
