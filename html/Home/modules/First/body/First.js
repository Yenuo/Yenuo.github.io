import React from 'react'
import Card from '../card/Card.js'
import {RaisedButton} from 'material-ui';
import {PropTypes} from "prop-types";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import { Button   } from 'react-bootstrap';
import { Grid ,Row ,Col } from 'react-bootstrap';
import "./first.css";
export default React.createClass({


  handleClick:function(event){

  console.log('data');




            $.get("http://10.81.9.45:3000/API/log/test",

            function(data,status){
             alert("数据：" + data + "\n状态：" + status);
              console.log(data);
                console.log(status);
            });


  },

  render() {
//first完成项目
    return (
      <div>
         <Button bsStyle="primary" >Primary</Button>
         <MuiThemeProvider>
            <RaisedButton label="Primary" primary={true} style={{margin:"10px"}}  onClick={this.handleClick}/>
         </MuiThemeProvider>


          <Grid style={{margin:" 100px auto",width: "900px",height: "600px",background: "#999999"}}>
            <Row className="show-grid">
          <Card  name="腾讯地图" intro="PM:candy" background="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3703713083,1955009033&fm=117&gp=0.jpg" image="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2896575661,3470561068&fm=58&u_exp_0=2329542046,3137255658&fm_exp_0=86&bpow=192&bpoh=192"></Card>
          <Card color="#0f0"  name="QQ" intro="hello" image="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3056100264,2898293013&fm=58&u_exp_0=2489066649,2564987603&fm_exp_0=86&bpow=800&bpoh=600"></Card>
          <Card  name="应用宝" intro="PM:candy" background="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3703713083,1955009033&fm=117&gp=0.jpg" image="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3143452097,3727266701&fm=58&u_exp_0=2576418482,3393961291&fm_exp_0=86&bpow=512&bpoh=512"></Card>

          <Card color="#0f0" name="腾讯管家" intro="PM:candy" image="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2857111130,4013656579&fm=58&s=50221C72D4C7D10150FBECCD0200F0A9&bpow=121&bpoh=75"></Card>
          <Card name="腾讯地图" intro="PM:candy" background="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3703713083,1955009033&fm=117&gp=0.jpg" image="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2896575661,3470561068&fm=58&u_exp_0=2329542046,3137255658&fm_exp_0=86&bpow=192&bpoh=192"></Card>
          <Card  color="#0f0"></Card>

            </Row>
          </Grid>
      </div>
    );
  }
})
