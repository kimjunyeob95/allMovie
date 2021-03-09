const express = require('express');
const db = require('../dbconnection');
const router = express.Router();

router.post('/', (req,res) => {
    let data = JSON.parse(req.body.movieData);
    const file = req.files.file;
    const fileName = req.files.file.name;
    let result = {
        type : true,
        msg : "success"
    };
    const mtitle = data.mtitle;
    const msubtitle = data.msubtitle;
    const insert_query = `INSERT INTO tbl_movie (mtitle,msubtitle,mimage,mpath) VALUES (?,?,?,?)`;

    file.mv('./uploads/'+fileName,function (err) {
        if(err){
            res.send(err);
        } else {
            db.query(insert_query, [mtitle, msubtitle, fileName, "/uploads/"+fileName], (err,rows) => {
                if(!err){
                    result.mseq=rows.insertId
                    res.send(result);
                } else {
                    result.type = false;
                    result.msg = `query error : ${err}`;
                    res.send(result);
                }
            });
        }
    })

    
    
})

module.exports = router;