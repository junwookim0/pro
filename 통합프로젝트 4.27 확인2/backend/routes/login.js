
var express = require('express');
var router = express.Router();

const logins = require('../login.json');

let count =2;

router.get("/", function (req, res, next) {
    console.log(logins);
    res.send(logins);
});

router.post("/", function (req, res, next) {
    const user = req.body.data.user;
    const password = req.body.data.password;
    count++;
    const loginboard = {
        id : count,
        user : user,
        password : password,
    };

    logins.push(loginboard);
    res.send("ok");
});

router.get('/:id', function(req, res, next) {    
    const m = logins.filter( login => login.id == req.params.id);
    res.send(m[0]);
});


module.exports = router;
