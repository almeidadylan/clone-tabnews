test("GET to api/v1/status/postgres should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status/postgres");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.postgres_version).toBeDefined();
  console.log(responseBody);

  const expectedVersion = "16.11 - resposta padrão";
  expect(responseBody.postgres_version).toEqual(expectedVersion);
});
