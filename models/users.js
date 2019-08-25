const db = require('../database/db');

const selectQuery = 'SELECT * FROM editores WHERE username=$username && password=$password';

async function autheticateUser(username, password){
    const resultQuery = await db.query('SELECT * FROM editores WHERE username=$1 AND pass=$2', [username, password]);
    const rows = resultQuery.rows;

    let isVisitante = username === 'visitante';

    if (rows.length >= 1 || isVisitante) {
        db.setUsr(username, password);
        this.userName = username;
        this.isAuthorize = !isVisitante;
        return true;
    } else {
        return false;
    }
}


async function insertNewUser (userAdmin, passAdmin, userNew, passNew) {
    const isValidAdminUsr = await autheticateUser(userAdmin, passAdmin);
    if(isValidAdminUsr){
        const {results} = await db.querySelect('SELECT * FROM editores WHERE username=$1 AND pass=$2', [usern, password]);
    }else{
        console.log('Invalid administration user');
    }
}

function closeDB (){
    db.closeDB()
}


exports.autheticateUser = autheticateUser;
exports.insertNewUser = insertNewUser;
exports.closeDB = closeDB;
exports.isValid = () => {
    return this.isAuthorize;
};
exports.getUser = () => {
    return this.userName;
};

