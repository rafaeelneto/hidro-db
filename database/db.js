const { Pool } = require('pg');

const pool = new Pool();

const querySelect = function(queryText, param){
    pool.query(queryText, param)
}

module.exports = {
    setUsr: (usr, psw) => {
        const connectionString = `postgres://${usr}:${psw}@35.193.155.132:5432/cosanpa-db`
        this.pool = new Pool({
            connectionString: connectionString
        });
    },
    query: (text, params) => pool.query(text, params)
}

