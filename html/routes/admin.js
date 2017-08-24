var express = require('express');
var admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Mounted');
//  console.log(parent); // refers to the parent app
});


admin.use(function(req, res, next) {
  console.log('middleware 1')
  next()
});

admin.use(function(req, res, next) {
  console.log('middleware 12')
  next()
});
admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});
module.exports = admin;
