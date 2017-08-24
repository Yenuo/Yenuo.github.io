import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      project:'',
      type:'',
      name:'',
      toole:'测试报告'

    };
  },
  handleClick:function(event){

    var request = new XMLHttpRequest();
    request.open("POST", "api/report/cc");
    var data = "name=" + this.refs['v1'].value
                      + "&number=" + this.refs['v2'].value;
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
    var _this=this;
    request.onreadystatechange = function() {
      if (request.readyState===4) {
        if (request.status===200) {
          var data = JSON.parse(request.responseText);
_this.refs['v1'].value=123;
        } else {
          alert("发生错误：" + request.status);
        }
      }
    }

  },
  handleChange1: function(event) {
          this.setState({project: event.target.value});
        },
  handleChange2: function(event) {
          this.setState({type: event.target.value});
        },
  handleChange3: function(event) {
          this.setState({name: event.target.value});
        },
  render() {
    return (
    <form className="form-horizontal">
  <div className="form-group">
    <label htmlFor="inputEmail3" className="col-sm-2 control-label" >项目</label>
  <div className="col-sm-5">

      <input type="text" className="form-control" id="inputEmail3" placeholder="project" ref="v1" onChange={this.handleChange1}/>
  </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputPassword3" className="col-sm-2 control-label">测试类型</label>
  <div className="col-sm-5">
      <input type="text" className="form-control" id="inputPassword3" placeholder="type" ref="v2" onChange={this.handleChange2}/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputPassword3" className="col-sm-2 control-label">需求名称</label>
  <div className="col-sm-5">
      <input type="text" className="form-control" id="inputPassword3" placeholder="name" ref="v2" onChange={this.handleChange3}/>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-default" onClick={this.handleClick}>OK</button>
    </div>

  </div>
  <h3 className="center">{this.state.project}{this.state.type}{this.state.name}{this.state.toole}</h3>
</form>
);
  }
})
