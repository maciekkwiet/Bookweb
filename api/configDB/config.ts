import { Pool } from 'pg';

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URI,
//     ssl: { rejectUnauthorized: false },
// });


// DO ZMIANY NA NASZA DB
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "password",
    port: 3000,
    database: "jwttest"
});

export default pool;
