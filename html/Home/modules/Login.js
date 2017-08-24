import React from 'react'
import App from './App'
export default React.createClass({
  getInitialState:function(){
    return {hint:''};
    handleClick();
  },

  componentWillMount(){
  /*
    var _this =this;
            $.post("api/user/login",
            {
              username: '',
              password: ''
            },
            function(data,status){
              alert("数据：" + data + "\n状态：" + status);

            });
            */
      },
  //点击登录
  handleClick:function(event){


var _this =this;
        $.post("http://10.81.9.45:3000/api/log/login",
        {
          username: this.refs['username'].value,
          password:this.refs['password'].value
        },
        function(data,status){
      //    alert("数据：" + data + "\n状态：" + status);
          if(JSON.parse(data).result==="success"){
              top.location='/';
          }else{
            _this.setState({hint:"用户名或密码错误"});
            _this.refs['password'].value="";
          }
        });



/*
    var request = new XMLHttpRequest(); //定义一个对象
    request.open("POST", "api/user/login");
    //构建一个body
    var data = "username=" + this.refs['username'].value
                      + "&password=" + this.refs['password'].value;

    //设置一个请求头
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //发送

  request.send(data);
  //  alert(request);

    //处理返回结果
    var _this=this;

    request.onreadystatechange = function() {
        console.log(request);
        //判断现在处理状态
      if (request.readyState===4) {
         //判断返回结果的状态
        if (request.status===200) {
            console.log(request.responseText);
            //接收处理返回的结果
            var data = JSON.parse(request.responseText);
            console.log(data.result==="success");
            console.log(request.responseText);
            if(data.result==="success"){
                top.location='/';
            }else{
              _this.setState({hint:"用户名或密码错误"});
              _this.refs['password'].value="";
            }
        }else {
          console.log("-----");
          console.log("request.readyState:"+request.readyState);
          console.log("request.status:"+request.status);
              console.log("-----");
          console.log("发生错误：" + request.status);
        }
      }
    }
*/
  },
  render() {
    var style={
      color:"red"
    };
    return(
      <div>
      <App name="5">
          <div>
            <div>
            </div>
          </div>
      </App>
      <div className="container"  >
        <div className="row " >
          <div className="col-sm-4 col-md-4 col-xs-4  " >
          </div>

          <div className="col-sm-4 col-md-4 col-xs-4 " >
           <form className="form-signin">
             <h2 className="form-signin-heading">Please sign in</h2>
           <label htmlFor="inputEmail" className="sr-only">userEmail address</label>
         <input type="text" defaultValue="qq" id="inputEmail" className="form-control" placeholder="Email address" required autofocus  ref="username"/>
             <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" defaultValue="qq" id="inputPassword" className="form-control" placeholder="Password" required ref="password"/>
             <div className="checkbox">
               <label>
                 <input type="checkbox" value="remember-me"/> Remember me
               </label>
             </div>
             <p style={style}>{this.state.hint}</p>
             <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>Sign in</button>
           </form>
          </div>
          <div className="col-sm-4 col-md-4 col-xs-4  " >
          </div>
        </div>
       </div>
</div>
    );
  }
})
