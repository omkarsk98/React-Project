var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  console.log(req._remoteAddress, req.UserHostAddress);
  res.status(200).send('I am a Programmer!');
});

module.exports = router;