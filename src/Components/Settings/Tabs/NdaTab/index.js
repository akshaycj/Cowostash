import React, { Component } from "react";
import './index.css'
import {Switch,Icon} from "antd"
import SquareCard from "../../SquareCard"

export default class  extends Component {

  render() {

    return (
      <div>
      <div className="NDA-main"  >
      <div style={{display:"flex"}}><h2>Enable NDA</h2><Switch style={{backgroundColor:"black",marginLeft:"10%"}} onChange={this.onPhotoCaptureTRiggered}/></div>
      <div className="theme-button" style={{width:"200px",display:"flex",alignSelf:"flex-end",justifyContent:'space-evenly'}}>Add NDA <Icon style={{fontSize:'18px'}} type='plus'/></div>
      </div>
      <hr style={{width:"95%",marginTop:"3%"}}/>
      <div style={{display:"flex"}}>
        <SquareCard title="Standard Template NDA1"/>
        <SquareCard title="Standard Template NDA2"/>
        <SquareCard title="Standard Template NDA3"/>
      </div>
      </div>
    );
  }
}
