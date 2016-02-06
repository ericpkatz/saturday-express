var router = require('express').Router();
var db = require('../db/foo');
module.exports = router;

router.post('/', function(req, res, next){
    db.insert(req.body);
    res.redirect('/foos');
});
router.get('/', function(req, res, next){
    res.render('list', {foos: db.list(), title: 'Foo-list'});
});

router.get('/new', function(req, res, next){
    res.render('new', {title: 'New Foo'});
});