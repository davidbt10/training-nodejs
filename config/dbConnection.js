const mysql = require('mysql');

const connMySQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'my_password',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
}