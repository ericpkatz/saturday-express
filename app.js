var db = require('./db/foo');
var express = require('express');

var app = express();

app.get('/', function(req, res, next){
    res.send('hello there');
});

app.listen(process.env.PORT);

