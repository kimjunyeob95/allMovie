const express = require('express');
const db = require('../dbconnection');
const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body);
    const mtitle = req.body.mtitle;
    const mseq = req.body.mseq;
    const msubtitle = req.body.msubtitle;
    const insert_query = `UPDATE tbl_movie SET mtitle=?, msubtitle=? WHERE mseq=?`;
    db.query(insert_query, [mtitle, msubtitle, mseq], (err,rows) => {
        if(!err){
            res.send('success');
        } else {
            res.send(`query error : ${err}`);
        }
    })
})

module.exports = router;