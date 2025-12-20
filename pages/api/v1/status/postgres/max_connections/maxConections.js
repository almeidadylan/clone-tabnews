import pool from "/infra/pool.js";


async function getMaxConnections() {
    let client;

    try {
        client = await pool.connect();

        const maxConnections = await client.query('SHOW max_connections;');

        return maxConnections.rows[0].max_connections;
    } catch (err) {
        console.error('Erro ao consultar número máximo de conexões: ', err);
        throw err;
    } finally {
        if (client) client.release();
    }
}

export default getMaxConnections;