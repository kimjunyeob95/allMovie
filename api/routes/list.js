const express = require('express');
const db = require('../dbconnection');
const router = express.Router();

router.use('/', (req,res) => {
    string_query = `SELECT * FROM tbl_movie`;
    db.query(string_query, [], (err,result) => {
        if(!err){
            res.send(result);
        } else {
            res.send(`query error : ${err}`);
        }
    });
})

module.exports = router;