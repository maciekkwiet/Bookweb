import promise from 'bluebird';

const options = {
  promiseLib: promise,
  query: (e: any) => {
    console.log(e.query);
  }
};
const pgp = require('pg-promise')(options);

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

export default db
