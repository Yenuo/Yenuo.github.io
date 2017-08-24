var express = require('express');
var router = express.Router();
var db = require('./cdb');
var file = require('./file');

//访问地址  http://localhost:3000/api/report/test/3
//根据参数获取信息
router.get('/test/:id', function(req, res, next) {
  console.log(req.params.id);
      res.send("od");
/*
function hook(connection){

  var  sql = 'SELECT * FROM apptest where id='+req.params.id;

  connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }

      res.send(result[0]);
  });
};
db(hook);
*/
});

/*
*上传文件并读取
*调用file.js文件中的函数执行
*/
router.post("/upload",function(req,res,next){
  file(req,res);
});

router.get("/aa",function(req,res,next){
  res.download('/my/dir','112.xlsx');


});
/*
*在线预览效果
*参考http://oss.sheetjs.com/js-xlsx/
*
*/
router.get('/read/file', function (req, res, next) {






  var options = {
    root:'/API/public',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = 'output.pdf';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });

});


/*
*生成并下载的文件
*这个路由的做两件事
*一是生成文件
*二是下载文件
*参数是生成文件的文件名
*/
router.get('/download/file/:file', function (req, res, next) {




  res.download('/API/public/112.xlsx',req.params.file, function(err){
  if (err) {

  } else {

  }
});
/*
  var options = {
    root:'/my/dir',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
*/
});


router.get('/', function(req, res, next) {
  console.log("hello");
res.send("hello");
});

module.exports = router;
