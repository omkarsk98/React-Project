'use strict';
var express = require('express');
var router = express.Router();

const getIP = require('external-ip')();

router.get('/', function (req, res, next) {
    //let external_ip = getIP((err, ip) => { if (err) throw err; var ex = ip });
    let local_ip = req.client.remoteAddress.split(':')[3] || req.headers['x-forwarded-for'] || req.ip.split(':')[3] || req.connection.remoteAddress.split(':')[3];
    console.log(local_ip);
    //console.log('Ex:' + ex);
    res.status(200).json({ local_ip });
});

module.exports = router;