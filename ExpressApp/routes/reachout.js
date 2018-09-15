var express = require('express');
var router = express.Router();
var sql = require('mysql');

const con = sql.createConnection({
    host: "localhost",
    user: "omkar",
    password: "IamOmkar!",
    database: 'Friends'
});
con.connect(function(err){
    if(err) throw err;
});

/* GET users listing. */
router.post('/', function (req, res, next) {
    con.query('insert into messages values(?,?)',[req.body.name,req.body.message],function(err, result){
        if(err) throw err;
    })
    res.status(200).send('Message received. Thank you for the help.');
});

module.exports = router;