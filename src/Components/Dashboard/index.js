import React, { Component } from "react";
import './index.css'
import Graph from "../Graph"
import Calender from "react-calendar"
export default class  extends Component {

  render() {

    return (
      <div style={{padding:"15px"}}>
      <div style={{display:"flex",justifyContent:"space-around"}} >
      <div className="Dashboard-Card" style={{flexDirection:"column"}} >
       <h2>Check-ins Today</h2>
       <h1>98</h1>
        </div>
        <div className="Dashboard-Card" style={{flexDirection:"column"}} >
       <h2>Total Checkins</h2>
       <h1>5322</h1>
        </div>
        <div className="Dashboard-Card" style={{flexDirection:"column"}} >
       <h2>Users Registered</h2>
       <h1>463</h1>
        </div>
        </div>
        <div style={{display:"flex",padding:"10px",justifyContent:"space-around"}}>
          <Graph/>
          <Calender/>
        </div>
      </div>
    );
  }
}
