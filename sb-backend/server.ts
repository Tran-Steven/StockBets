import { Pool } from 'pg';

const express = require('express')
const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
.then(
  app.listen(3001, () => {console.log("server is live.")})
)
.catch((e) => console.error(e))

pool.query('SELECT NOW()', (err: Error, res: any) => {
  console.log(err, res);
  pool.end();
});

module.exports = { pool };