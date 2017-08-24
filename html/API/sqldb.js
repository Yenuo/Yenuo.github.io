var mysql = require('mysql');


function db(hook){
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
   hook(connection);
    //查
  /*  var  sql = 'SELECT * FROM apptest where id=2';

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
    */
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
