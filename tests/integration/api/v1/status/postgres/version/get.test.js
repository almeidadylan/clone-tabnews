test("GET to api/v1/status/postgres should return 200", async () => {
  const response = await fetch(
    "http://localhost:3000/api/v1/status/postgres/version"
  );
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.postgres_version).toBeDefined();

  const expectedVersionSimple = "16.0";
  expect(responseBody.postgres_version.simple_version).toEqual(
    expectedVersionSimple
  );

  const expectedVersionFull =
    "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit";
  expect(responseBody.postgres_version.full_version).toEqual(
    expectedVersionFull
  );

  const espectedFullResponse = {
    simple_version: expectedVersionSimple,
    full_version: expectedVersionFull,
  };
  expect(responseBody.postgres_version).toEqual(espectedFullResponse);
});
