var express = require('express');
var router = express.Router();


/*
// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', function(req, res, next) {
  res.render('index1');
});
router.get('/login1', function(req, res, next) {
  res.render('login1');
});
router.get('/aa', function(req, res, next) {
  res.send('aaa');
});
router.get('/aa', function(req, res, next) {
  res.send('aaa');
});
module.exports = router;
