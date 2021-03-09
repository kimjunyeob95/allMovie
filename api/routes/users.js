const express = require('express');
const db = require('../dbconnection');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('respond with a resource');
});

module.exports = router;
