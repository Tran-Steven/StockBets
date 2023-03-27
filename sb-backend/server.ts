import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'stockbets',
  user: 'owen',
  password: 'himama123',
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
