const { Pool } = require('pg');

const connectionString = `postgres://uema_publico:uemapublico@10.20.100.30:5432/uema`
const pool = new Pool({
    connectionString: connectionString
});

const querySelect = function(queryText, param){
    //pool.query(queryText, param)
}

module.exports = {
    setUsr: (usr, psw) => {
        this.poolUsr = new Pool();

        /*
        if(usr !== 'visitante'){
            const connectionString = `postgres://${usr}:${psw}@35.193.155.132:5432/cosanpa-db`
            this.poolUsr = new Pool({
                connectionString: connectionString
            });
        }else{
            this.poolUsr = new Pool();
        }*/
    },
    getParam: () => {return pool.connect()},
    query: (text, params) => pool.query(text, params),
    queryAuth: (text, params) => this.poolUsr.query(text, params),
    closeDB: () => {
        this.poolUsr.end();
        console.log("User connection closed");
    },
}

