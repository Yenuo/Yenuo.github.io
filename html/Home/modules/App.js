import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  getInitialState:function(){
    return {type:this.props.name|"1"};
  },
  active1:function(){
    this.setState({type:1});
  },
  active2:function(){
    this.setState({type:2});
  },
  active3:function(){
    this.setState({type:3});
  },
  active4:function(){
    this.setState({type:4});
  },
  active5:function(){
    this.setState({type:5});
  },
  active6:function(){

  },
  render() {
      var type=this.state.type;
      var name =new Array(6);
       name[this.state.type] = "active";

    return (
      <div >


        <nav className="navbar navbar-default navbar-static-top ">
          <div className="container ">
            <div className="navbar-header">

              <a className="navbar-brand" href="#">适配服务报告</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">

                <li className={name[1]} onClick={this.active1}>  <NavLink  to="/" onlyActiveOnIndex  >首页</NavLink></li>
                <li className={name[2]} onClick={this.active2} >  <NavLink  to="/report/title">测试报告</NavLink></li>
                <li className={name[3]} onClick={this.active3}>  <NavLink  to="/history/bug">历史数据</NavLink></li>
                <li className={name[4]} onClick={this.active4}>  <NavLink  to="/repos1">Bug分析</NavLink></li>
              <li className={name[4]} onClick={this.active4}>  <NavLink  to="/First">First</NavLink></li>
            <li className={name[4]} onClick={this.active4}>  <NavLink  to="/LL">Login</NavLink></li>
            </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className={name[5]} onClick={this.active5}> <NavLink  to="/login">登录</NavLink></li>

                <li > <NavLink  to="/logout">注销</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar float">
              {this.props.children}
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main float">

                {this.props.children.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
