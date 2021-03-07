import { Pool } from 'pg';
import * as winston from 'winston';

const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => {
    winston.info('Connected with the Database');
  })
  .catch(err => {
    winston.error(err.message);
  });

export default pool;
