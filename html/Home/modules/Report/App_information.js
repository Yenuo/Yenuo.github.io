import React from 'react'
/*
import mysql  from 'mysql'
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '940812',
  port: '3306',
  database: 'nodejs',
});

connection.connect();
var  sql = 'SELECT * FROM apptest';
var user="";
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }

    console.log('查询结果为: ', result);
        this.user=result;

});

connection.end();
*/

export default React.createClass({

getInitialState () {
  return {
    id: 3,
    app_name: '222',
    app_edition: '22',
    app_size: 30,
    app_test_time: '2017年6月23--2017年7月5',
    app_test_type: '22',
    app_test_key: '22',
    disabled:'disabled',
    value:'编辑'
  };
},
setData:function(){

  var data = "app_name=" + this.state.app_name
            + "&app_edition=" + this.state.app_edition
            + "&app_size=" + this.state.app_size
            + "&app_test_time=" + this.state.app_test_time
            + "&app_test_type=" + this.state.app_test_type
            + "&app_test_key=" + this.state.app_test_key
            + "&id=" + this.state.id
            ;

  var request = new XMLHttpRequest(); //定义一个对象
  request.open("POST", "api/report/updata1");
  //构建一个body


  //设置一个请求头
  request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //发送

request.send(data);
//  alert(request);

  //处理返回结果
  var _this=this;

  request.onreadystatechange = function() {

    if (request.readyState===4) { //判断现在处理状态
      if (request.status===200) { //判断返回结果的状态

       var data = JSON.parse(request.responseText); //接收处理返回的结果

        if(data.result==="success"){
          alert("保存成功");
        }else{
          alert("重新保存");
        }
      }
      else {
  alert("发生错误：" + request.status);
        console.log("发生错误：" + request.status);
     }
    }
  }
},
handleClick:function(event){

  if(  this.state.value==="编辑"){
    this.setState({
      disabled:'',
      value:'确定'
    });
  }else{
  console.log(this.state);
      this.setState({
        disabled:'disabled',
        value:'编辑'
      });
      this.setData();

  }




},
  componentWillMount(){

        var _this = this;
      var request = new XMLHttpRequest();
      request.open("GET", "api/Report/aa");
      request.send();
      request.onreadystatechange = function() {
      if (request.readyState===4) {
        if (request.status===200) {

          var data = JSON.parse(request.responseText);
  //    console.log(data);
  //    console.log(data.id);console.log(data.app_name);
          _this.setState({
            id:  data.id,
            app_name: data.app_name,
            app_edition: data.app_edition,
            app_size: data.app_size,
            app_test_time: "2017年6月23--2017年7月5",
            app_test_type: data.app_test_type,
            app_test_key: data.app_test_key,
            disabled:'disabled',
              value:'编辑'
          });
    /*      if (data.success) {

            document.getElementById("searchResult").innerHTML = data.msg;
          } else {
            document.getElementById("searchResult").innerHTML = "出现错误：" + data.msg;
          }
          */
        } else {
          alert("发生错误：" + request.status);
        }
      }
      }

      },

    handleChangeApp_name: function(event) {
    this.setState({app_name : event.target.value});
  },
   handleChangeApp_edition: function(event) {
    this.setState({app_edition : event.target.value});
  },
  handleChangeApp_size: function(event) {
  this.setState({app_size : event.target.value});
  },
  handleChangeApp_test_time: function(event) {
  this.setState({app_test_time : event.target.value});
  },
  handleChangeApp_test_type: function(event) {
  this.setState({app_test_type : event.target.value});
  },
  handleChangeApp_test_key: function(event) {
  this.setState({app_test_key : event.target.value});
  },




  render() {

    return (
         <div className="App ">
        <p className="App-intro">应用信息.{this.state.id}</p>


          <table  className="table table-responsive">
            <tbody>
            <tr className="table-line-bgcolor" >
                <th >应用名称</th>
                <th >应用版本</th>
                <th >应用大小</th>
                <th >测试周期</th>
            </tr>
            <tr>

                <td style={{margin:'0px',padding:'0px' }} >
                  <input name="app_name" style={{width:'280px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_name}  disabled={this.state.disabled} onChange={this.handleChangeApp_name}></input>
                </td>
                <td style={{margin:'0px',padding:'0px' }}>
                    <input  ref="app_edition" style={{width:'280px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_edition}  disabled={this.state.disabled} onChange={this.handleChangeApp_edition}/>
                </td>
                <td style={{margin:'0px',padding:'0px' }}>
                  <input ref="app_size" style={{width:'280px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_size} disabled={this.state.disabled} onChange={this.handleChangeApp_size}/>
                </td>
                <td style={{margin:'0px',padding:'0px' }}>
                  <input ref="app_test_time" style={{width:'280px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_test_time}  disabled={this.state.disabled} onChange={this.handleChangeApp_test_time}/>
              </td>
            </tr>
            <tr className="table-line-bgcolor">
                <th  >测试种类</th>
                <th colSpan="3" >具体测试需求</th>
            </tr>
            <tr>
              <td style={{margin:'0px',padding:'0px' }}>
                <input ref="app_test_type" style={{width:'280px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_test_type}   disabled={this.state.disabled} onChange={this.handleChangeApp_test_type}/>
              </td>
              <td colSpan="3" style={{margin:'0px',padding:'0px' }}>
                <input  ref="app_test_key" style={{width:'840px',height:'44px',margin:'0px',padding:'10px' }} type="text" value={this.state.app_test_key}   disabled={this.state.disabled}  onChange={this.handleChangeApp_test_key}/>
              </td>
            </tr>
              </tbody>
        </table>
          <input className="center-block btn btn-primary" type="button" value={this.state.value} ref="bianji" onClick={this.handleClick}/>
      </div>
    );
  }
})
