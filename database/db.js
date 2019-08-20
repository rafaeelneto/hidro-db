import {Pool} from 'pg';

const pool = new Poll();

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
