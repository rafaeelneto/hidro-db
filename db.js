import {Pool} from 'pg';

const pool = new Poll(process.env.DB_URL);
pgClient.connect();

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
