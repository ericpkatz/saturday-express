var db = require('./db/foo');
var express = require('express');
var swig = require('swig');
var path = require('path');
var bodyParser = require('body-parser');
swig.setDefaults({cache: false});


var app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(require('method-override')('_method'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res, next){
    res.render('index', { title: 'Home'});
});

app.use('/foos', require('./routes/foos'));

app.listen(process.env.PORT);

