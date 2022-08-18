
const express = require('express');
const router = express.Router();
const pool = require('../config/db');


router.get('/apps', async (req, res) => {
    pool.getConnection((err, conn) => {

        //if (err) throw err;

        try {
            const query = `SELECT * FROM world.city LIMIT 0,10`;
            conn.query(query, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send({ status: "OK", data: result });
            });
        } catch (err) {

            res
                .status(err?.status || 500)
                .send({ status: "FAILED", data: { error: err?.message || err } });
            res.end();
        }

    });
});

router.get('/apps/:idApp', async (req, res) => {

    console.log("ID to search " + req.params.idApp);

    const {
        params: { idApp },
    } = req;

    pool.getConnection((err, conn) => {

        if (!idApp) {
            res
                .status(400)
                .send({
                    status: "FAILED",
                    data: { error: "Parameter ':idApp' can not be empty" },
                });
        }

        try {
            const query = `SELECT * FROM world.city WHERE city.ID = ?`;
            conn.query(query, [idApp], (err, result) => {
                conn.release();
                if (err) throw err;
                res.send({ status: "OK", data: result });
            });
        } catch (err) {

            res
                .status(err?.status || 500)
                .send({ status: "FAILED", data: { error: err?.message || err } });
            res.end();
        }

    });
});

router.post('/apps', async (req, res) => {


    // let Name = 'CalleLapas';
    // let CountryCode = 'BOL';
    // let District = 'Grunnon';
    // let Population = 45678;

    const appValues = req.body;

    let Name = 'Juves18Agost';
    let CountryCode = 'BOL';
    let District = 'Grunnon';
    let Population = 45678;

    pool.getConnection((err, conn) => {

        const query = `INSERT INTO world.city SET?`;
        conn.query(query, appValues, (err, result) => {

            conn.release();
            if (err) throw err;
            res.status(201).send({ status: "OK", data: result });
            //console.log("App Created Hippotetically");
        });
        res.redirect('/apps');
        res.end();

    });

});

router.patch('/apps/:idApp', async (req, res) => {



});

router.delete('/apps/:idApp', async (req, res) => {

    console.log("ID to DELETE " + req.params.idApp);

    const {
        params: { idApp },
    } = req;


    pool.getConnection((err, conn) => {

        if (!idApp) {
            res
                .status(400)
                .send({
                    status: "FAILED",
                    data: { error: "Parameter ':idApp' can not be empty" },
                });
        }

        try {
            const query = `DELETE FROM world.city WHERE city.ID = ?`;
            conn.query(query, [idApp], (err, result) => {
                conn.release();
                if (err) throw err;
                res.status(204).send({ status: "OK" });
            });
        } catch (err) {

            res
                .status(err?.status || 500)
                .send({ status: "FAILED", data: { error: err?.message || err } });
            res.end();
        }

    });
});

module.exports = router;