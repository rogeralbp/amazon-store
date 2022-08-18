
const express = require('express')
//const pool = require('./config/db');
const routesHandler = require('./routes/handler.js');

const app = express()
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());
app.use('/', routesHandler);

//MYSQL CONNECTION
// pool.getConnection( (err, conn)=> {

//     if(err) throw err;

//     const Name = 'Negrita';
//     const CountryCode = 'BOL';
//     const District = 'Manchas';
//     const Population = 12345;

//     const query = `INSERT INTO world.city(Name, CountryCode, District, Population) VALUES(?,?,?,?)`;
//     conn.query(query, [Name, CountryCode, District, Population] , (err, result) => {

//         conn.release();
//         if(err) throw err;
//         console.log(result);
//     });
// });

//API
app.get("/api",(req, res) => {
    res.json({"pets":[ "Kyser", "Manchas", "Tyson", "Negrita"]})
})

//STARTING OF API
app.listen(5000, () => console.log("server started on 5000 port"))