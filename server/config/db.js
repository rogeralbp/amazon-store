
const mysql = require('mysql');
require('dotenv').config();

//NOT Recommend
// const con = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: 'Saborio17@'
// });


//Recommend way - alot better than createConnection
//previos way produces many erros whe conn. is ended
const pool = mysql.createPool({

    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

});

module.exports = pool;