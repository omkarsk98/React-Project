var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.status(200).send('I am a friend!!');
});

router.get('/Akshay', function (req, res, next) {
  // res.send('respond with a resource');
  res.status(200).send("I am a Akshay! I am Omkar's friend");
});

module.exports = router;