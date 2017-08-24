import React from 'react'
import { Grid ,Row ,Col } from 'react-bootstrap';
import "./card.css";
import { Image } from 'react-bootstrap';


export default React.createClass({

  handleClick:function(){

    alert("TODO 跳转  "+this.props.name);

  },
  render() {

  const style = {
    background:this.props.color,
    };
    return (

    <Col xs={6} md={4} className="card" style={style} >
      <div className="div" onClick={this.handleClick}>
        <div className="image">
          <Image   src={this.props.image} responsive  />
        </div>
        <p className="name">{this.props.name}</p>
        <p className="intro">{this.props.intro} </p>
      </div>
    </Col>

    )
  }
})
