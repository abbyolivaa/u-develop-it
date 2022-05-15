const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username,
        user: 'root',
        //Your MySQL password
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;