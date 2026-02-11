import "dotenv/config";

export const POSTGRES_HOST='localhost'
export const POSTGRES_DB='local_db'
export const POSTGRES_USER='local_user'
export const POSTGRES_PASSWORD='local_password'
export const PORT=process.env.POSTGRES_PORT
export const DATABASE_URL='postgres://local_user:local_password@localhost:5433/local_db'

/*const env_variables = {
    pg_host: process.env.POSTGRES_HOST,
    pg_db: process.env.POSTGRES_DB,
    pg_user: process.env.POSTGRES_USER,
    pg_password: process.env.POSTGRES_PASSWORD,
    pg_port: process.env.POSTGRES_PORT,
    database_url: `${process.env.DATABASE_URL}`,
}

export default env_variables;*/