var mysql = require('mysql');


function db(hook){
  //创建一个connection
  var connection = mysql.createConnection({
      host: 'localhost',       //主机
      user: 'root',               //MySQL认证用户名
      password: '940812',        //MySQL认证用户密码
      database: 'report',
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

  //调用回调函数进行数据库的操作
   hook(connection);


  //关闭connection
  connection.end(function(err){
      if(err){
          console.log(err.toString());
          return;
      }
      console.log('[connection end] succeed!');
  });
}
module.exports = db
