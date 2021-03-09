const express = require('express');
const db = require('../dbconnection');
const router = express.Router();
const fs = require('fs');

router.post('/', (req,res) => {
    const mseq = req.body.mseq;
    const mimage = req.body.mimage;
    let result = {
        type : true,
        msg : "success"
    };
    const delete_query = `DELETE FROM tbl_movie WHERE mseq=?`;
    db.query(delete_query, mseq, (err,rows) => {
        if(!err){
            fs.unlink('../api/uploads/'+mimage,function(err){
                if(err){
                    result.type=false;
                    result.msg=`file error : ${err}`;
                    res.send(result);
                }else{
                    res.send(result);
                }
            })
        } else {
            result.type=false;
            result.msg=`query error : ${err}`;
            res.send(result);
        }
    })
})

module.exports = router;