var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var db = require('./sqldb')
/* GET home page. */
router.get('/question', function(req, res, next) {
    res.send('question');
    console.log('question');
});
router.get('/aa', function(req, res, next) {
function hook(connection){
  var  sql = 'SELECT * FROM apptest where id=2';

  connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }


console.log("result[0]");
  console.log(result[0]);
  console.log("----------");

    console.log(req.cookies);
    console.log("----------");


      res.send(result[0]);
  });
};
db(hook);

/*
  //创建一个connection
  var connection = mysql.createConnection({
      host: 'localhost',       //主机
      user: 'root',               //MySQL认证用户名
      password: '940812',        //MySQL认证用户密码
      database: 'nodejs',
      port: '3306'                   //端口号
  });

  //创建一个connection
  connection.connect(function(err){
      if(err){
          console.log('[query] - :'+err);
          return;
      }
      console.log('[connection connect]  succeed!');
  });
    //查
    var  sql = 'SELECT * FROM apptest where id=2';

    connection.query(sql,function (err, result) {
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
            }


  console.log("result[0]");
    console.log(result[0]);
    console.log("----------");

      console.log(req.cookies);
      console.log("----------");


        res.send(result[0]);
    });
  //关闭connection
  connection.end(function(err){
      if(err){
          console.log(err.toString());
          return;
      }
      console.log('[connection end] succeed!');
  });
*/
});

//修改报告
router.post('/updata1', function (req, res) {

  function hook(connection){

    var sql = 'UPDATE apptest SET app_name ="'+req.body.app_name+'",app_edition="'+req.body.app_edition+'",app_size="'+req.body.app_size+'",app_test_time="'+req.body.app_test_time+'",app_test_type="'+req.body.app_test_type+'",app_test_key="'+req.body.app_test_key+'" WHERE id = "'+req.body.id+'"';

    console.log(sql);
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log("result-----");
  console.log(result);
  if(result.affectedRows){
    res.send('{"result":"success"}');
  }else{
      res.send('{"result":"false"}');
  }
    /*    if(result[0].number){  //判断返回的数据个数
          res.send('{"result":"success"}');
        }else {
          res.send('{"result":"false"}');
        }
        */
    });
  };
  db(hook);

});




//获取参数
router.get('/bb/:id', function(req, res){
    console.log(req.params.id);
  res.send('aa  + req.params.id'+ req.params.id);
});




//测试post
router.post('/cc', function (req, res) {
  console.log('and this matches too');
  console.log("----------");
  console.log(req.method.toLowerCase() );
  console.log("----------");
  console.log(req.body);
  console.log("----------");
  res.end('{"success":true,"msg":"员工：enoch 信息保存成功！"}');
});


/* 上传页面 */
  router.get('/', function(req, res, next) {
     res.render('upfile');
  });

  /* 上传*/
 router.post('/file/uploading', function(req, res, next){
       console.log(req.body);
       console.log("----------");
   //生成multiparty对象，并配置上传目标路径
   var form = new multiparty.Form({uploadDir: './public/files/'});
   //上传完成后处理
   form.parse(req, function(err, fields, files) {
     var filesTmp = JSON.stringify(files,null,2);

     if(err){
        console.log('parse error: ' + err);
     } else {
       console.log('parse files: ' + filesTmp);
       var inputFile = files.inputFile[0];
       var uploadedPath = inputFile.path;
       var dstPath = './public/files/' + inputFile.originalFilename;
       //重命名为真实文件名
       fs.rename(uploadedPath, dstPath, function(err) {
         if(err){
           console.log('rename error: ' + err);
         } else {
           console.log('rename ok');
         }
      });
     }

     res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
     res.write('received upload:\n\n');
     res.end(util.inspect({fields: fields, files: filesTmp}));
  });
 });


module.exports = router;
