async function postgresVersion(req, res) {
  const psqlVersion =
    (await process.env.PG_VERSION) || "16.11 - resposta padrão";

  res.status(200).json({ postgres_version: psqlVersion });
}

export default postgresVersion;
