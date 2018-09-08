import React, { Component } from "react";
import './index.css'
import ipad from "../../../../../Res/ipad-new.jpg"

export default class  extends Component {

  render() {

    return (
      <div style={{display:"flex"}} >
      <img style={{width:"300px",height:"400px"}} src={ipad}/>
      <div></div>
      </div>
    );
  }
}
