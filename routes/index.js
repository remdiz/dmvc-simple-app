var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {title: 'dMVC simple example'});
});

module.exports = router;
