var fs = require("fs");

var xlso = require('xlso');
var xlsx = require('xlsx');
var db = require('./cdb');

var formidable = require("formidable");
var file=formidable.File;
 // parse a file upload
var form = new formidable.IncomingForm();
/*
*打开数据库
*执行参数sql中的语句
*并关闭数据库
*/
function insert(sql){
  function hook(connection){
    connection.query(sql,function (err, result) {
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
            }

    });
  };
  db(hook);
};

//文件上传读取
function upfile(req,res){

  //设置文件上传后保存的路径
  form.uploadDir = "/my/dir";
  //保留原始文件的扩展名
  form.keepExtensions = true;
  form.on('error', function(err) {
          console.log(err); //各种错误
      });
    console.log(" upload file start!");
   //fields为表单提交时的字段是个json
   //files为表单提交时所上传的文件信息的集合通过files.file可以获取所上传文件的较多信息。现在是单文件上传
    form.parse(req,function(err,fields,files){
      //为上传的文件重命名：其中files.file.path可以获取文件的上传路径
  //   fs.renameSync(files.myfile.path,form.uploadDir  +  "/" + files.myfile.name);

    //解析文件信息
    readfile(files.myfile.path,0,0);

    });
    //监听上传完成的进度
    form.on('progress',function(bytesReceived,bytesExpected){
      var percent = Math.floor(bytesReceived / bytesExpected * 100);
      console.log(percent);
    });
    //文件上传完成后执行
    form.on("end",function(){
      console.log("over!");
        res.send('{"result":"success"}');
    });
};
/*
*文件上传并读取且存入数据库中
*参数
*文件在本地的位置
*上传用户的id
*文件的唯一标示为了标记数据是统一上传的
*/
function readfile(filepath,uid,only){
  //    INSERT INTO `acmrecom` (`id`, `rec_id`, `rec_mod`, `thumb`, `thumbsize`, `rec_name`, `userid`, `hits`, `insert_time`, `update_time`, `check_userid`, `checktime`, `checkstate`, `listorder`, `vstate`) VALUES
  //    (2, 1, 'master', 'master/thumb/20160707/20160707123457_1008723740.JPG', '309K', '马李昕', 1, 0, NULL, '2016-07-07 12:35:04', 1, NULL, 1, 1, 1),
  //    (3, 2, 'activity', 'activity/thumb/20160708/thumb_20160708025627_227039967.JPG', '356K', '约健发起的活动', 1, 0, NULL, '2016-07-08 14:56:30', 1, NULL, 1, 1, 1),
  //    (4, 1, 'activity', 'activity/thumb/20160708/thumb_20160708025615_1939252587.JPG', '309K', '东软2016教师乒乓球比赛', 1, 0, NULL, '2016-07-08 14:56:33', 1, NULL, 1, 1, 1);


      // xlsx的工作簿解析xlso包。
      var workbook = xlsx.readFile(filepath);


      //将工作簿解析为js数组
    /*
    *读取第一张工作表的数据 并 存入数据库中
    */
      var rows = xlso.parseWorkbook(workbook,0,0);
      var list =  "INSERT INTO models ( uid, brand, model, version,resolution, property, test, remark, only) VALUES ";
      console.log(rows.length);
      for(var i=0;i<rows.length;i++)
      {
        if(rows[i]['品牌'] !== '' || rows[i]['机型'] !== ''){
          list +=  "("+uid+",'"+rows[i]['品牌']+"','"+rows[i]['机型']+"','"+rows[i]['SDK版本']+"','"+rows[i]['分辨率']+"','"+rows[i]['资产编号']+"','"+rows[i]['测试结果']+"','"+rows[i]['备注']+"',"+only+"),";
        }else{
          list=list.substring(0,list.length-1);
          list+=";";
        }
      }
      list=list.substring(0,list.length-1);
      list+=";";
      insert(list);
    /*
    *读取第二张工作表的数据 并 存入数据库中
    */
      var rows1 = xlso.parseWorkbook(workbook,1,0);
      var list1 =  "INSERT INTO problems ( uid, function, type, level,model, title, detatil, varsion, resolution, imglog, remark,only) VALUES ";
      for(var i=0;i<rows1.length;i++)
      {
        if(rows1[i]['问题类型'] !== '' && rows1[i]['详细'] !== ''){
          list1 +=  "("+uid+",'"
          +rows1[i]['功能模块']+"','"
          +rows1[i]['问题类型']+"','"
          +rows1[i]['问题级别']+"','"
          +rows1[i]['问题机型']+"','"
          +rows1[i]['标题']+"','"
          +rows1[i]['详细']+"','"
          +rows1[i]['SDK版本(MIUI 版本)']+"','"
          +rows1[i]['分辨率']+"','"
          +rows1[i]['截图/LOG']+"','"
          +rows1[i]['备注']+"',"
          +only+"),";

        }else{
          list1=list1.substring(0,list1.length-1);
          list1+=";";


        }
      }
      list1=list1.substring(0,list1.length-1);
      list1+=";";
      insert(list1);
    /*
    *读取第三张工作表的数据 并 存入数据库中
    */
      var rows2 = xlso.parseWorkbook(workbook,2,0);
      var list2 =  "INSERT INTO performance ( uid, model, installtime, runtime,only) VALUES ";
      for(var i=0;i<rows2.length;i++)
      {
        if(rows2[i]['机型'] !== '' || rows2[i]['启动时间'] !== ''){
          list2 +=  "("+uid+",'"+rows2[i]['机型']+"','"+rows2[i]['启动时间']+"','"+rows2[i]['安装时间']+"',"+only+"),";
        }else{
          list2=list2.substring(0,list2.length-1);
          list2+=";";
        }
      }
      list2=list2.substring(0,list2.length-1);
      list2+=";";

      insert(list2);

};


module.exports = upfile;
