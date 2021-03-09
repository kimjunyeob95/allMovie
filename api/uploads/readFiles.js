const express = require('express');
const router = express.Router();
const db = require('../dbconnection');
const fs = require('fs');

router.get("/",function(req,res){
    
    const seq = req.query.mseq;
    const query = `SELECT mimage from tbl_movie where mseq=${seq}`;
    
    db.query(query, [], (err,rows) => {
        if(!err){
            var imgName = rows[0].mimage;
            res.end(fs.readFileSync(__dirname+"/"+imgName));
        } else {
            res.send(`query error : ${err}`);
        }
    });
    
});

module.exports = router;