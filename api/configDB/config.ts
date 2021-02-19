import { Pool } from 'pg';
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'bookweb_db',
  password: 'password',
  port: 5432,
})
export default pool
