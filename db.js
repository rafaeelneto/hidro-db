const Pool = require('pg');

const pool = new Pool();

module.exports = {
    queryAll: (queryText, param) => pool.query(queryText, param),
}

/*
    pool.query('SELECT * FROM poços', (err, res) => {
        console.log(err, res)
        pool.end()
    })*/
