test("Get to api/v1/status/postgres/max_connections should return 200", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/status/postgres/max_connections"
    );
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.max_connections).toBeDefined();
    
});