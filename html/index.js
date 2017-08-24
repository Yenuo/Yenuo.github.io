import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
    var Modal = require('react-bootstrap-modal')
import App from './Home/modules/App'
import Report from './Home/modules/Report'
import Baogaolist from './Home/modules/Report'
import History from './Home/modules/History'
import Repo from './Home/modules/Repo'
import Home from './Home/modules/Home'
import Repos1 from './Home/modules/repos1.js'
import First from './Home/modules/First/body/First'

import Login from './Home/modules/Login.js'
import Logout from './Home/modules/Logout.js'

import App_information from './Home/modules/Report/App_information.js'
import Problem_summary from './Home/modules/Report/Problem_summary.js'
import problem_analysis from './Home/modules/Report/problem_analysis.js'
import performance_summary from './Home/modules/Report/performance_summary.js'
import title from './Home/modules/Report/title.js'
import Terminal_summary from './Home/modules/Report/Terminal_summary.js'
import Summarize from './Home/modules/Report/Summarize.js'

import LL from './Home/modules/Login/Login.js'
import Bug from './Home/modules/history/Bug.js'
import Model from './Home/modules/history/Model.js'
//hashHistory   browserHistory
//获取cookie中的值
function getCookie(name)
{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return unescape(arr[2]);
  }else{
    return null;
  }
}
//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//react-router跳转之前判断权限
const requireAuth = function(nextState, replace)  {
//  console.log("requireAuth");
//  console.log(getCookie('time'));

///    if (!auth.isAdmin()) {
        // Redirect to Home page if not an Admin
//        replace({ pathname: '/' })
//    }

   if (!getCookie('time')) {
        // Redirect to Home page if not an Admin

        alert("请登录!");
          replace({ pathname: '/login' });
    }

}

function logout(){
  delCookie('time');

  alert("欢迎下次浏览!");

}

render((
  <Router history={hashHistory} >
    <Route path="/LL" component={LL}/>
    <Route path="/First" component={First}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout} onEnter={logout}/>
  <Route path="/" component={App} name="1" >
        <IndexRoute component={Home}/>

        <Route path="/history" component={History}>
          <Route path="/history/bug" component={Bug}/>
          <Route path="/history/model" component={Model}/>
          <Route path="/history/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/report" component={Report} >
          <Route path="/report/title" component={title}/>
          <Route path="/report/app_information" component={App_information}/>
          <Route path="/report/problem_summary" component={Problem_summary}/>
          <Route path="/report/problem_analysis" component={problem_analysis}/>
          <Route path="/report/terminal_summary" component={Terminal_summary}/>
          <Route path="/report/performance_summary" component={performance_summary}/>
          <Route path="/report/summarize" component={Summarize}/>

          <Route path="/report/:repoName" component={Baogaolist}/>
        </Route>
        <Route path="/repos1" component={Repos1}/>
    </Route>

  </Router>
), document.getElementById('app'))
