import React, { Component } from "react";
import './index.css'
import { Switch, Icon, Input,Button } from "antd";
const { TextArea } = Input;

export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
Title:"",
Nda:""
    }
  }
onTitle=(e)=>{
  console.log("value",e.target.value)
  this.setState({Title:e.target.value})
}
onNda=(f)=>{
  console.log("value1",f.target.value)
  this.setState({Nda:f.target.value})
}
onUpdate=()=>{
  this.props.data(this.state.Title,this.state.Nda)
}
  render() {

    return (
      <div className="" >
       <Input
        style={{ marginTop: "1%", width: "320px" }}
        onChange={this.onTitle}
        placeholder="Title"
      />

      <TextArea
        style={{ marginTop: "2%", width: "320px" }}
        onChange={this.onNda}
        placeholder="NDA"
        autosize={{ minRows: "6" }}
      />
      <Button onClick={this.onUpdate}>update</Button>
      </div>
    );
  }
}
