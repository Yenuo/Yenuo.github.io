var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var fs = require("fs");
var path = require("path")

var xlso = require('xlso');
var xlsx = require('xlsx');


var formidable = require("formidable");
var file=formidable.File;
 // parse a file upload
var form = new formidable.IncomingForm();
//设置文件上传后保存的路径
form.uploadDir = "/my/dir";
//保留原始文件的扩展名
form.keepExtensions = true;
form.on('error', function(err) {
        console.log(err); //各种错误
    });
//express的路由
router.post("/upload",function(req,res,next){
    console.log("---------------------------start!");
   //fields为表单提交时的字段是个json
   //files为表单提交时所上传的文件信息的集合通过files.file可以获取所上传文件的较多信息。现在是单文件上传
    form.parse(req,function(err,fields,files){
      //为上传的文件重命名：其中files.file.path可以获取文件的上传路径
  //    fs.renameSync(files.myfile.path,form.uploadDir  +  "/" + files.myfile.name);

      if(err){
              console.log(err);
      }


      // xlsx的工作簿解析xlso包。
      var workbook = xlsx.readFile(files.myfile.path);
      //将工作簿解析为js数组
      var rows = xlso.parseWorkbook(workbook,0,0);
        console.log("--------------0");
        console.log(rows);
          console.log("--------------1");
        var row1 = xlso.parseWorkbook(workbook,1,0);
        console.log(row1);
          console.log("--------------2");
        var row2 = xlso.parseWorkbook(workbook,2,0);
        console.log(row2);


      //显示你的js数组
      rows.forEach(function(item,index){
        console.log("Id："+ item.Id +"，Name："+ item.Name +"，City："+ item.City);
      });
      //  res.send(rows);
          console.log(rows);




    })
    form.on('progress',function(bytesReceived,bytesExpected){
      var percent = Math.floor(bytesReceived / bytesExpected * 100);
      console.log(percent);
    });
    //文件上传完成后执行
    form.on("end",function(){

      console.log("over!");
    })

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

router.get('/aa', function(req, res, next) {
  res.send('aaa');
});
module.exports = router;
