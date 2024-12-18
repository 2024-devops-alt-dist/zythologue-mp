import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    host: process.env.POSTGRESS_HOST,
    user: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_NAME,
    port: parseInt(process.env.POSTGRESS_PORT!),
    max: 20,
    idleTimeoutMillis: 30000000,
    connectionTimeoutMillis: 2000000,
});
