import React, { Component } from "react";
import './index.css'
import { Switch, Icon, Input,Button } from "antd";

export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
title:"",
email:""
    }
  }
onName=(e)=>{
  console.log("value",e.target.value)
  this.setState({title:e.target.value})
}
onEmail=(f)=>{
  console.log("value1",f.target.value)
  this.setState({email:f.target.value})
}
onUpdate=()=>{
  this.props.data(this.state.title,this.state.email)
}

  render() {

    return (
      <div className="" >
      <Input
    className="Staffs-Input"
    onChange={this.onName}
    placeholder="Name"
  />
  <Input
    className="Staffs-Input"
    onChange={this.onEmail}
    placeholder="Email"
  />
 <Button onClick={this.onUpdate}>update</Button>
              
      </div>
    );
  }
}
