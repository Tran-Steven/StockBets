import { Pool } from 'pg';

const pool = new Pool({
  host: 'ruby.db.elephantsql.com',
  port: 5432,
  database: 'svkoitau',
  user: 'svkoitau',
  password: 'MiSUukp8gbg_FUIB7qXN2TyJILAsHYlP',
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
