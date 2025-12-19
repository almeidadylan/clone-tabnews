import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

async function postgresVersion(req, res, simple) {
  const psqlVersion = (await getPostgresVersion(simple)) || "erro na resposta ";

  res.status(200).json({ postgres_version: psqlVersion });
}

export default postgresVersion;

async function getPostgresVersion() {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query("SELECT version();");

    const versionString = result.rows[0].version;
    console.log("Versao do postgres:", versionString);
    
    return {
      simple_version: format(versionString),
      full_version: versionString
    }
    

    return versionString;
  } catch (err) {
    console.erro("Erro ao buscart a versão do PostgresSQL:", err);

    throw new Error("Falha na comunicação com o banco de dados");
  } finally {
    if (client) {
      client.release();
    }
  }
}

function format(string) {
  let result = string.split(" ");
  return result[1];
}
