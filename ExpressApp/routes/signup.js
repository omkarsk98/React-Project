var express = require('express');
var router = express.Router();
const Connection = require('./mySQLConnection');

var con1 = new Connection({
    host: "localhost",
    user: "omkar",
    password: "IamOmkar!",
    database: 'Friends'
});


router.post('/', function (req, res, next) {
    con1.query('update signups set isVerified=true where username=?;', [req.body.username])
    .then().catch();
    res.status(200);
});

module.exports = router;