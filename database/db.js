const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    queryAll: (queryText, param) => pool.query(queryText, param),
}

