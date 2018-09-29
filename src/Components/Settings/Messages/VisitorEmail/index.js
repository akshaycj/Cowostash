import React, { Component } from "react";
import "./index.css";
import { Switch } from "antd";
import Squarecard from "../../../SquareCard"

import { Cascader,Input } from 'antd';
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
      data:[]
    }
  }
  onClick=()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div className="">
        <div className="message-tab-common-container">
          <div className="item">
            Enable email <Switch />
          </div>

          <div className="item">
            Default email for all purpose <Switch />
          </div>
          <div
            className="theme-button"
            style={{ width: 200, marginLeft: "auto" }}
            onClick={this.onClick}
          >
            Add Email +
          </div>
          {this.state.show?
           <div>
           <hr style={{width:"100%"}}/>
           <div style={{display:"flex",flexDirection:"column"}}>
           
           <Cascader style={{margin:"10px",width:"400px"}} options={options} placeholder="Purpose Form Selector" />
           <TextArea style={{margin:"10px",width:"400px"}}/>
           <div className="theme-button" style={{width:"60px",margin:"auto"}}>Add</div>
           </div>
           </div>:null
        }
         
          <hr style={{width:"100%"}}/>
          <div style={{display:"flex"}}>
            {this.state.data.map(item=>(<Squarecard title="hello" img="true" />))}
          </div>
          
        </div>
      </div>
    );
  }
}
