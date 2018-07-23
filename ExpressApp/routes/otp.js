var express = require('express');
var router = express.Router();
const Mail = require('./mailerModule.js');
const Connection = require('./mySQLConnection');

var con1 = new Connection({
    host: "localhost",
    user: "omkar",
    password: "IamOmkar!",
    database: 'Friends'
});

router.post('/', function (req, res, next) {
    // res.send('respond with a resource');
    //console.log(req.body);
    let otp = Math.floor(Math.random() * (999998 - 111111 + 1) + 1);
    let mail = new Mail({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'omkarsk@asort.com',
            pass: 'asort@password'
        }
    });
    mail.sendMail({
        to: req.body.email,
        subject: 'OTP Confirmation',
        text: 'Please check your otp',
        html: `<p>We received your request for signup. Your 6 digit OTP is ${otp}</p>`
    }).then()
        .catch();
    console.log(req.body);
    con1.query('insert into signups(username,email,password) values (?,?,?);', [req.body.username, req.body.email, req.body.password])
        .then(console.log('Inserted')).catch();
    res.status(200).json({ otp });
});

module.exports = router;