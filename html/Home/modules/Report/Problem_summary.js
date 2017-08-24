import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
        kill_all:0,
        kill_compatible:0,
        kill_public:0,

        serious_all:0,
        serious_compatible:0,
        serious_public:0,

        general_all:0,
        general_compatible:0,
        general_public:0,

        disabled:'disabled',
        value:'编辑'
    };
  },
  handleChangekill_all: function(event) {
  this.setState({kill_all : event.target.value});
},
 handleChangekill_compatible: function(event) {
  this.setState({kill_compatible : event.target.value});
},
handleChangekill_public: function(event) {
this.setState({kill_public : event.target.value});
},

handleChangeserious_all: function(event) {
this.setState({serious_all : event.target.value});
},
handleChangeserious_compatible: function(event) {
this.setState({serious_compatible : event.target.value});
},
handleChangeserious_public: function(event) {
this.setState({serious_public : event.target.value});
},

handleChangegeneral_all: function(event) {
this.setState({general_all : event.target.value});
},
handleChangegeneral_compatible: function(event) {
this.setState({general_compatible : event.target.value});
},
handleChangegeneral_public: function(event) {
this.setState({general_public : event.target.value});
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

  render() {
    return (

     <div className="App">
        <p className="App-intro">问题概述</p>

        <table  className="table table-bordered" >
          <tbody>
            <tr>
                <th ></th>
                <th>总问题数</th>
                <th>兼容问题数</th>
                <th>公共问题数</th>
            </tr>
            <tr>
           		  <th >致命</th>
                <td >
                    <input name="kill_all" type="number" value={this.state.kill_all}  disabled={this.state.disabled} onChange={this.handleChangekill_all}></input>
                </td>
                <td >
                    <input name="kill_compatible" type="number" value={this.state.kill_compatible}  disabled={this.state.disabled} onChange={this.handleChangekill_compatible}></input>
                </td>
                <td >
                  <input name="kill_public" type="number" value={this.state.kill_public}  disabled={this.state.disabled} onChange={this.handleChangekill_public}></input>
                </td>
            </tr>
          	<tr>
                <th >严重</th>
                <td >
                    <input name="serious_all" type="number" value={this.state.serious_all}  disabled={this.state.disabled} onChange={this.handleChangeserious_all}></input>
                </td>
                <td >
                    <input name="serious_compatible" type="number" value={this.state.serious_compatible}  disabled={this.state.disabled} onChange={this.handleChangeserious_compatible}></input>
                </td>
                <td >
                  <input name="serious_public" type="number" value={this.state.serious_public}  disabled={this.state.disabled} onChange={this.handleChangeserious_public}></input>
                </td>
            </tr>
            <tr>
                <th >一般</th>
                <td >
                    <input name="general_all" type="number" value={this.state.general_all}  disabled={this.state.disabled} onChange={this.handleChangegeneral_all}></input>
                </td>
                <td >
                    <input name="general_compatible" type="number" value={this.state.general_compatible}  disabled={this.state.disabled} onChange={this.handleChangegeneral_compatible}></input>
                </td>
                <td >
                  <input name="general_public" type="number" value={this.state.general_public}  disabled={this.state.disabled} onChange={this.handleChangegeneral_public}></input>
                </td>
            </tr>
            <tr>
                <th >合计</th>
                <td >{parseInt(this.state.kill_all) +parseInt(this.state.serious_all) +parseInt(this.state.general_all) }</td>
                <td >{parseInt(this.state.kill_compatible) +parseInt(this.state.serious_compatible) +parseInt(this.state.general_compatible) }</td>
                <td >{parseInt(this.state.kill_public) +parseInt(this.state.serious_public) +parseInt(this.state.general_public) }</td>

            </tr>
          </tbody>
        </table>
<input className="center-block btn btn-primary" type="button" value={this.state.value} ref="bianji" onClick={this.handleClick}/>
      </div>
    );
  }
})
