import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {Bar, Pie, Line} from 'react-chartjs-2';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "22",
      week: "33",
      month: "55",
      data: [],
      date: "24/05",
      time: "15:33",
      name: "sam",
      purpose: "interview",
      staff: "jon snow",
      chartdata:{
        labels: ["January", "February", "March"],
        datasets: [{
        label: "Visits",
        backgroundColor: ["purple","blue","red"],
       
        data: [10, 40, 5],
        }]
      }
      
    };
  }
  
  onClick = () => {};

  render() {
    return (
      <div>
        <div className="checkin-header">
          
        </div>
        <br />
        <br />
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div className="Insight-Profile">
          <div style={{ display: "flex" }}>
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="badge-image"
              alt="avatar"
            />
            <div>
              <h3 style={{ position: "relative", left: "25px" }}>
                {this.state.name}
              </h3>
              <div style={{ display: "flex" }}>
                <h4
                  style={{ position: "relative", left: "25px", bottom: "10px" }}
                >
                  {this.state.date}
                </h4>
                <h4
                  style={{ position: "relative", left: "30px", bottom: "10px" }}
                >
                  {this.state.time}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5 style={{ color: "#6B6767" }}>Purpose:</h5>
              <h5 style={{ position: "relative", left: "5px" }}>
                {this.state.purpose}
              </h5>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5 style={{ color: "#6B6767" }}>Staff:</h5>
              <h5 style={{ position: "relative", left: "5px" }}>
                {this.state.staff}
              </h5>
            </div>
          </div>
          <Link style={{ color: "black" }} to="/checkinprofile">
            <div className="Insight-button" onClick={this.onClick}>
              Details
            </div>
          </Link>
        </div>
        {this.state.data.map(item => (
          <div className="" />
        ))}
        <div style={{width:"50%",height:"auto"}}>
        <div className="insight-card" >
        < Line height="70%" width="100%" type="line" data={this.state.chartdata} />
        </div>
        <div className="insight-card" >
        < Pie height="70%" width="100%" data={this.state.chartdata} />
        </div>
        
        </div>
        </div>
      </div>
    );
  }
}
