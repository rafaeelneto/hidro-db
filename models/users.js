const db = require('../database/db');
const bcrypt = require('bcryptjs');

const visitante = 'visitante'

async function autheticateUser(username, password){
    const resultQuery = await db.query('SELECT pass FROM editores WHERE username=$1', [username]);
    const rows = resultQuery.rows;
    let isVisitante = username === visitante;
    let authen;
    if (!isVisitante){
        authen = bcrypt.compareSync(password, rows[0].pass);
    }
    if ((authen && rows.length >= 1) || isVisitante) {
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
    if(isValidAdminUsr && userAdmin !==visitante && userNew !== visitante){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(passNew, salt);
        await db.queryAuth('INSERT INTO editores (editor_id, username, pass) VALUES (DEFAULT, $1, $2)', [userNew, hash]);
        return true;
    }else{
        console.log('Invalid administration user');
        return false;
    }
}

function closeDB (){
    db.closeDB();
}

exports.visitante = visitante;
exports.autheticateUser = autheticateUser;
exports.insertNewUser = insertNewUser;
exports.closeDB = closeDB;
exports.isValid = () => {
    return this.isAuthorize;
};
exports.getUser = () => {
    return this.userName;
};

