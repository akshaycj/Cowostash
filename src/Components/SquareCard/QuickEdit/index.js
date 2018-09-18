import React, { Component } from "react";
import './index.css'
import { Cascader,Button } from 'antd';
const options = [{
  value: 'Event',
  label: 'Event',
  },
 {
  value: 'Visitor',
  label: 'Visitor', 
}];

export default class  extends Component {
onUpdate=(value)=>{
console.log("at",value)
}
  render() {

    return (
      <div style={{display:"flex",justifyContent:"space-between"}} >
       <Cascader options={options} onChange={this.onUpdate} placeholder="Please select" />
       <Button onClick={this.onUpdate}>Update</Button>

       
      </div>
    );
  }
}
