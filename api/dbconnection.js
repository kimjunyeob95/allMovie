const mysql = require('mysql');
const connection = mysql.createPool({
    host : "211.253.26.40", //"s10games.cktsav3qchmg.us-east-1.rds.amazonaws.com";
    port : 3306,
    user : "root",//"s10gamesuser";
    password : "gksqha2020!!",
    database : "test"
});

module.exports = connection;