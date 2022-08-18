
const express = require('express');
const router = express.Router();
const pool = require('../config/db');


router.get('/apps', async (req, res) => {
    pool.getConnection((err, conn) => {

        if (err) throw err;

        try {
            
            const query = `SELECT * FROM world.city`;
            conn.query(query, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err){

            console.log(err);
            res.end();
        }

    });
});

router.post('/apps', async (req, res) => {

    const Name = 'CalleLapas';
    const CountryCode = 'BOL';
    const District = 'Grunnon';
    const Population = 45678;

    pool.getConnection((err, conn) => {

        const query = `INSERT INTO world.city(Name, CountryCode, District, Population) VALUES(?,?,?,?)`;
        conn.query(query, [Name, CountryCode, District, Population], (err, result) => {

            conn.release();
            if (err) throw err;
            console.log("App Created Hippotetically");
        });
        res.redirect('/apps');
        res.end();

    });

});

module.exports = router;