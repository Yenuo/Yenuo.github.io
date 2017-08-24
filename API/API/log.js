var express = require('express');
var router = express.Router();
var db = require('./cdb');

/*
*测试接口
*/
router.get('/test', function (req, res, next) {

  console.log(req.body.username);
    console.log(req.body.password);

    res.send('hello');

});

/*
*设置数据库中cookie信息
*time 设置cookie的内容
*这个cookie对应的用户
*无返回值
*/
var setcookie= function(req, res,time,uid){
    function hook(connection){
      var  sql = 'INSERT INTO cookies(cookie,uid) VALUES ("'+time+'",'+uid+')';
      console.log(sql);
      connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
      });
    };
    db(hook);
};

/*
*处理登录获取的post请求
*用户登录的信息接口
*查询数据库用户的权限
*返回用户的权限并设置数据库中cookie的值
*/
router.post('/login', function (req, res, next) {
  console.log("login");

  //获取当前系统时间  用于处理cookie信息
  var oDate = new Date();
  const time = oDate.getTime();
  console.log(time);
  console.log(req.body);

  //定义回调函数  用户处理对数据库的操作
  function hook(connection){
    var  sql = 'SELECT *  FROM users where username="'+req.body.username+'" and password="'+req.body.password+'"';

    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }


        if(result[0].id){  //判断返回的数据个数
          //设置前台cookie
          res.cookie('time', time, { maxAge: 900000});
          //设置数据库中的cookie
          setcookie(req, res, time,result[0].id);
          res.send('{"result":"success","type":"'+result[0].type+'"}');
        }else {
          res.send('{"result":"false"}');
        }

    });
  };
  //调用数据库
  db(hook);

});

/*
*处理注销的get接口
*需要传一个用户uid
*将数据库中的cookies表中相关信息删去
*访问地址  http://localhost:3000/api/log/logout/3
*/
router.get('/logout/:uid', function (req, res, next) {
  function hook(connection){
    var  sql = 'DELETE from cookies where uid ='+req.params.uid;

    connection.query(sql,function (err, result) {

        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        if(result[0].affectedRows){
            res.send('{"result":"success"}');
        }else{
            res.send('{"result":"false"}');
        }
    });
  };
  db(hook);


    res.send('hello');

});


module.exports = router;
