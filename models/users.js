const db = require('./../database/db');

const selectQuery = 'SELECT * FROM editores WHERE username=$username && password=$password';

async function autheticateUser(username, password){
    const resultQuery = await db.query('SELECT * FROM editores WHERE username=$1 AND pass=$2', [username, password]);
    const rows = resultQuery.rows;
    if(rows.length >= 1){
        //console.log('true');
        return true;
    }else{
        //console.log('false');
        return false;
    }
}

/*
const insertNewUser = async (userAdmin, passAdmin, userNew, passNew) => {
    if(autheticateUser(userAdmin, passAdmin)){
        const {results} = await db.querySelect('SELECT * FROM editores WHERE username=$1 AND pass=$2', [username, password]);
    }else{
        console.log('Invalid administration user');
    }
}*/

module.exports = {
    autheUser: (usr, psw) => autheticateUser(usr, psw)
    //insertNewUser: insertNewUser
}

