import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  getInitialState:function(){
    return {type:this.props.name|"1"};
  },
  handleClick:function(event){
    console.log("--------");
        console.log(event.target);
          console.log(event.target.name);
        console.log("--------");
        this.setState({type:event.target.name});

  },

  render() {

    var type=this.state.type;
    var name =new Array(6);
     name[this.state.type] = "bg";
    return (
      <div >

            <ul className="nav nav-sidebar">
              <li><NavLink className={name[1]} name="1" onClick={this.handleClick}  to="/report/title" >标题</NavLink></li>
            <li><NavLink className={name[2]} name="2" onClick={this.handleClick} to="/report/app_information">应用信息模块</NavLink></li>
              <li><NavLink className={name[3]} name="3" onClick={this.handleClick} to="/report/problem_summary">问题概述模块</NavLink></li>
              <li><NavLink className={name[4]} name="4" onClick={this.handleClick} to="/report/problem_analysis">问题分析模块</NavLink></li>
              <li><NavLink className={name[5]} name="5" onClick={this.handleClick} to="/report/terminal_summary">终端详情模块</NavLink></li>
              <li><NavLink className={name[6]} name="6" onClick={this.handleClick} to="/report/performance_summary">性能概述模块</NavLink></li>
              <li><NavLink className={name[7]} name="7" onClick={this.handleClick} to="/report/summarize">总结分析模块</NavLink></li>
            </ul>


      </div>
    );
  }
})
