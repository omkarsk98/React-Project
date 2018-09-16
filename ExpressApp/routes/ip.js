"use strict";
var express = require("express");
var router = express.Router();

const getIP = require("external-ip")();

router.get("/", function(req, res, next) {
  //let external_ip = getIP((err, ip) => { if (err) throw err; var ex = ip });
  let local_ip = req.connection.remoteAddress.split(":")[3];
  let host = req.headers['user-agent'].split(" ")[2]+" "+req.headers['user-agent'].split(" ")[3].slice(0, -1);
  //console.log("Request as ",req);
  console.log("Ip as " + local_ip,"OS as ",host);
  //console.log('Ex:' + ex);
  res.status(200).json({ local_ip: local_ip, host: host });
});

module.exports = router;
/* 
  Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/53
7.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
*/