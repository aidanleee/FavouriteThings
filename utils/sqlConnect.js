var mysql = require('mysql'); // like php require / require_once
var config = require('../config');

const connect = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pword,
    database: config.database
});

module.exports = connect;