const db = require('./../database/db');

const selectQuery = 'SELECT * FROM editores WHERE username=$username && password=$password'

module.exports = {
    compare: async (username, password) => {
        const {rows} = await db.queryAll('SELECT * FROM editores WHERE username=$1 AND pass=$2', [username, password]);
        if(rows.lenght !== 0){
            return true;
        }else{
            return false;
        }
    }
}

