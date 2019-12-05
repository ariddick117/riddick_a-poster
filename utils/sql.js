const sql = require('mysql');
const config = require('../config');

const connect = sql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
})

module.exports = connect;