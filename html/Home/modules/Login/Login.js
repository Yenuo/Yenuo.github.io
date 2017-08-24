import React,{ Component } from 'react';
import  './cms.css';

/**
 * 路由路径 登录成功后页面跳转到index
 */
export default React.createClass({

    getInitialState () {
      return {
        userName: "",
        userPassword: "",
        isRemember: false,
        unameHelp: "",
        upwdHelp: ""
      };
    },
    //监听input中的数据，保存到state中

    changeUsername:function(e){
      let uname = e.target.value;
      this.setState({
          userName: uname
      });
      console.log(this.state.userName);
    },
    changePassword:function(e){
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    },
    //是否记住密码
    handleCheckbox:function(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    },
    //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法
    handleClick:function(e){

        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        }else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });

            if(this.state.isRemember === true){ //是否记住密码，若记住，则保存至localstorage，反之，清除
                // let loginData = {this.state.userName,this.state.userPassword};
                let loginData = {};
                loginData.userName = this.state.userName;
                loginData.userPassword = this.state.userPassword;
                Data.localSetItem("mm_loginStatus",loginData);
            }else{
                Data.localRemoveItem("jiaj-loginStatus");
            }

            this.props.login(this.state.userName,this.state.userPassword);
            console.log(this.state);
        }
      },

    render(){

        return (
            <div className="login-box">
​
                <div className="login-title" style={{  fontSize: "30px",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: "600"}}>登   录</div>
                <form action="" className="form-horizontal">
                    <div className="form-group input-text">
                        <label htmlFor="uname">账号</label>
                        <input type="text" className="form-control" name="username" id="uname" ref="uname" placeholder="手机号/用户名"
                               onChange={this.changeUsername}/>
                        <span className="help-block">{this.state.unameHelp}</span>
                    </div>
​
                    <div className="form-group input-text">
                        <label htmlFor="upwd">密码</label>
                        <input type="password" className="form-control" name="password" id="upwd" ref="upwd" placeholder="密码"
                               onChange={this.changePassword}/>
                        <span className="help-block">{this.state.upwdHelp}</span>
                    </div>
​
                    <div className="form-group">
                        <label htmlFor="chk" className="check">
                            <input type="checkbox" id="chk" checked={this.state.isRemember} onClick={this.handleCheckbox} />
                            <span>记住密码</span>
                        </label>
                    </div>
​
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick.bind(this,this.state.userName,this.state.userPassword)} className="btn btn-primary login-btn">登录</button>
                    </div>
                </form>
​
            </div>
        )
    }
})
