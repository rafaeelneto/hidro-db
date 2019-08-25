const { Pool } = require('pg');

const pool = new Pool();

const querySelect = function(queryText, param){
    //pool.query(queryText, param)
}

module.exports = {
    setUsr: (usr, psw) => {
        if(usr !== 'visitante'){
            const connectionString = `postgres://${usr}:${psw}@35.193.155.132:5432/cosanpa-db`
            this.poolUsr = new Pool({
                connectionString: connectionString
            });
        }else{
            this.poolUsr = new Pool();
        }
    },
    query: (text, params) => pool.query(text, params),
    closeDB: () => {
        this.poolUsr.end();
        console.log("User connection closed");
    },
}

