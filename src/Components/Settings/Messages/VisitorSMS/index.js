import React, { Component } from "react";
import "./index.css";
import { Switch } from "antd";
import { Cascader,Input } from 'antd';
import Squarecard from "../../../SquareCard"


const { TextArea } = Input;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',

}, {
  value: 'jiangsu',
  label: 'Jiangsu',
}];
export default class extends Component {
constructor(props){
  super(props)
  this.state={
    show:false,
    data:[],
    purpose:"",
    subject:""
  }
}
onClick=()=>{
  this.setState({show:!this.state.show})
}
onAdd=()=>{
  if (this.state.purpose !== "" && this.state.subject !== "") {
    const data = this.state.data;
    data.push({ purpose: this.state.purpose, subject: this.state.subject });
    this.setState({ data });
    console.log("arr", this.state.data);
  }
}
onDetails=(e)=>{
  this.setState({subject:e.target.value})
}
onPurpose=(e)=>{
  this.setState({purpose:e})
}
  render() {
    return (
      <div className="">
        <div className="message-tab-common-container">
          <div className="item">
            Enable SMS <Switch />
          </div>

          <div className="item">
            Default SMS for all purpose <Switch />
          </div>
          <div
            className="theme-button"
            style={{ width: 200, marginLeft: "auto" }}
            onClick={this.onClick}
          >
            Add SMS +
          </div>
          {this.state.show?
           <div>
           <hr style={{width:"100%"}}/>
           <div style={{display:"flex",flexDirection:"column"}}>
           
           <Cascader style={{margin:"10px",width:"400px"}} options={options} onChange={this.onPurpose} placeholder="Purpose Form Selector" />
           <TextArea onChange={this.onDetails} style={{margin:"10px",width:"400px"}}/>
           <div className="theme-button" style={{width:"60px",margin:"auto"}} onClick={this.onAdd}>Add</div>
           </div>
           </div>:null
        }
         
          <hr style={{width:"100%"}}/>
          <div style={{display:"flex"}}>
            {this.state.data.map(item=>(<Squarecard title={item.purpose} 
                  img={true} />))}
          </div>
        </div>
      </div>
    );
  }
}
