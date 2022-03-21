var mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ip_create_basics'
}

module.exports = {
    connection: mysql.createConnection(config)
}
