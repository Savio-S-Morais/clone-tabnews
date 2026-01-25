import database from "/infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString(); // Configurado para retornar a data atual formatada segundo a ISO 8601
  const databaseVersion = (await database.query("SHOW server_version;")).rows[0]
    .server_version;
  const databaseMaxConnections = (await database.query("SHOW max_connections;"))
    .rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = (
    await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    })
  ).rows[0].count;

  response.status(200).json({
    updated_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(databaseMaxConnections),
        opened_connections: databaseOpenedConnections,
      },
    },
  });
}

export default status;
