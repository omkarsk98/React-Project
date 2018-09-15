"use strict";
var express = require("express");
var router = express.Router();

const getIP = require("external-ip")();

router.get("/", function(req, res, next) {
  //let external_ip = getIP((err, ip) => { if (err) throw err; var ex = ip });
  let local_ip = req.connection.remoteAddress.split(":")[3];
  console.log("Ip as " + local_ip);
  //console.log('Ex:' + ex);
  res.status(200).json({ local_ip: local_ip });
});

module.exports = router;
