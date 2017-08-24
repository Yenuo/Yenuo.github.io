var express = require('express');
var report = require('../API/report');
var user = require('../API/user');
var uploadfile = require('../API/uploadfile');
var api = express();

api.on('mount', function (parent) {
  console.log('api Mounted');
//  console.log(parent); // refers to the parent app
});

api.use(function(req,res,next){
	console.log('%s %s ',req.method,req.url);
  	console.log('ip: %s ',req.ip);
	next();
});
api.use('/report', report);
api.use('/user', user);
api.use('/uploadfile', uploadfile);
api.use(function(req, res, next) {
  console.log('middleware 12')
  next()
});
api.get('/', function (req, res) {
  res.send('api Homepage');
});
module.exports = api;
