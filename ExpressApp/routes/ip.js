var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    let ip = req.connection.remoteAddress.split(':')[3]
    res.status(200).send(ip);
});

module.exports = router;