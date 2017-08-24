var express = require('express');
var router = express.Router();

var report = require('../API/report');

var log = require('../API/log');
//用于记录客户端访问数据库时 记录其信息
report.use(function(req,res,next){
	console.log('%s %s ',req.method,req.url);
  	console.log('ip: %s ',req.ip);
	next();
});
//进入 report 中间件  用于处理用户登录 注销等操作
router.use('/log',log);
//进入 report 中间件  用于获取报告信息的内容
router.use('/report',report);


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello");
  res.render('index', { title: 'Express' });
});

module.exports = router;
