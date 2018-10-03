import React, { Component } from "react";
import "./index.css";
import Graph from "../Graph";
import Calendar from "react-calendar";
import Box from "../Box";


export default class extends Component {
  render() {
    return (
      <div
        style={{
          padding: "15px",
          background: "white",
          display: "flex",
          margin: 20,
          flexDirection: "column"
        }}
      >
        <div className="container">
          <Box top="Check-ins Today" main="98" />
          <Box top="Total Check-ins" main="5322" />
          <Box top="User Registered" main="463" />
        </div>
        <div className="container" style={{ marginLeft: 20 }}>
          <Graph />
          <div style={{ marginLeft: 40 }}>
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <div style={{display:"flex",justifyContent:"space-around"}} >
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
        </div> */
}
