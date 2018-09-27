import React, { Component } from "react";
import './index.css'
import {Switch} from "antd"

export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"cersie lannister",
      tovisit:"jon snow",
      date:"10/19",
      time:"15:33",
      companyname:"Thought factory"
    }
  }
  onBadgeTRiggered=()=>{

  }
  render() {

    return (
      <div>
      <div style={{ display: "flex",paddingTop:"20px",paddingBottom:"20px" }}>
              <h3>Enable Badge</h3>
              <Switch
                style={{ backgroundColor: "black", marginLeft: "10%" }}
                onChange={this.onBadgeTRiggered}
              />
      </div>
      <hr/>
      <div className="badge">
        <div style={{height:"20%",width:"100%",backgroundColor:"#E5E5E5"}}>
          <div style={{width:"60px",backgroundColor:"white",borderRadius:"10px",height:"20px",position:"relative",top:"15px",left:"145px"}}/>
          
  <img
      src="http://tachyons.io/img/logo.jpg"
      className="badge-image" alt="avatar"/>

        </div>
        <div className="badge-sub">
          <div>
            <h2>{this.state.name}</h2>
            <h3 style={{position:"relative",top:"40px"}}>{this.state.tovisit}</h3>
            <h2 style={{position:"relative",top:"40px"}}>{this.state.date}</h2>
            <h4 style={{position:"relative",top:"30px"}}>{this.state.time}</h4>
          </div>
          <div>
          <img style={{height:"100px",width:"100px",position:"relative",top:"40px"}} src="https://help.shopify.com/assets/manual/sell-in-person/hardware/barcode-scanner/2d-barcode-575669a49194cf6f6cf1f226833efd6cd4201465e22d128e88fbd81267f6d463.png"/>
          <h4 style={{position:"relative",top:"85px",left:"15px"}}>{this.state.companyname}</h4>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
