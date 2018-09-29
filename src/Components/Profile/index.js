import React, { Component } from "react";
import './index.css'
import {Input} from "antd"
export default class  extends Component {

  render() {

    return (
      <div className="" >
      <h2>PROFILE SETTINGS</h2>
      <div  style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3>NAME</h3>
        <Input/>
        <h3>EMAIL</h3>
        <Input/>
        <h3>PHONE NUMBER</h3>
        <Input/>
        <h3>DEPARTMENT</h3>
        <Input/>
        <h3>DESIGNATION</h3>
        <Input/>

        </div>
        <div>

        </div>
      </div>
      
      </div>
    );
  }
}
