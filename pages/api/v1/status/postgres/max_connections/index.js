import getMaxConnections from "./maxConections";

async function maxConnections(req, res) {
    const maxConnections = await getMaxConnections();
    res.status(200).json({ max_connections: maxConnections});
}

export default maxConnections;
