var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var db = require('./sqldb')
/* GET home page. */

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

});
router.get('/bb/:id', function(req, res ){
    console.log(req.params.id);
  res.send('aa  + req.params.id'+ req.params.id);
});

var setcookie= function(req, res,time){
    function hook(connection){
      var  sql = 'INSERT INTO Cookies(cookie) VALUES ('+time+')';
      console.log(sql);
      connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
          if(result. affectedRows){
          //  res.cookie('time', time, { maxAge: 900000});
            console.log("--！！！！！！！！！--");
                console.log(result);
            console.log("!!!!!!!!!!!--");
          }
          console.log("-------------");
              console.log(result);
          console.log("-------------");

      });
    };
    db(hook);
};



router.post('/login', function (req, res) {
  var oDate = new Date();
   const time = oDate.getTime();
  function hook(connection){
    var  sql = 'SELECT count(*) as unumber FROM User where uname="'+req.body.username+'" and password="'+req.body.password+'"';
    console.log(sql);
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

        if(result[0].unumber){  //判断返回的数据个数
          res.cookie('time', time, { maxAge: 900000});
            setcookie(req, res, time);
          res.send('{"result":"success"}');
        }else {
          res.send('{"result":"false"}');
        }
    });
  };
  db(hook);

});
router.get('/dd', function(req, res){
    console.log("--------\\\\\\\\\\");
  res.send('aa  + req.params.id');
});





router.get('/aa', function(req, res, next) {
  res.send('aaa');
});
module.exports = router;
