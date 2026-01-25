test("GET de /api/v1/status deve retornar 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("A propridade 'updated_at' deve ser a data atual", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined(); // BeDefined: Testa de o valor existe.

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);
});

test("A propridade 'version' deve retornar a versão do Postgres", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.version).toBeDefined();

  expect(responseBody.dependencies.database.version).toEqual("16.0");
});

test("A propridade 'max_connections' deve retornar o número de conexões máximas", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.max_connections).toBeDefined();

  expect(responseBody.dependencies.database.max_connections).toEqual(100);
});

test("A propridade 'opened_connections' deve retornar o número de conexões usadas", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
