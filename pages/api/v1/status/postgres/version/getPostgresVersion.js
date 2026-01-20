import pool from "/infra/pool.js";

function format(string) {
  let result = string.split(" ");
  return result[1];
}

async function getPostgresVersion() {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query("SELECT version();");

    const versionString = result.rows[0].version;
    //console.log("Versao do postgres:", versionString);

    return {
      simple_version: format(versionString),
      full_version: versionString,
    };
  } catch (err) {
    console.erro("Erro ao buscart a versão do PostgresSQL:", err);

    throw new Error("Falha na comunicação com o banco de dados");
  } finally {
    if (client) {
      client.release();
    }
  }
}

export default getPostgresVersion;
