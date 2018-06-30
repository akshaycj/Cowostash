import React, { Component } from "react";
import "./index.css";
import { LineChart } from "react-easy-chart";

export default class Graph extends Component {
  render() {
    return (
      <div className="main-rect1">
        <div className="graph-top">
          <div className="top-text-layer">Check-ins</div>
          <div className="weeka-button">
            <div style={{textAlign:'center',width:'100%'}} >
              Week
            </div>
          </div>
        </div>
        <div>
          <LineChart
            xType={"text"}
            axes
            width={740}
            height={220}
            interpolate={"cardinal"}
            data={[
              [
                { x: "Mon", y: 20 },
                { x: "Tue", y: 10 },
                { x: "Wed", y: 33 },
                { x: "Thu", y: 45 },
                { x: "Fri", y: 15 }
              ],
              [
                { x: "Mon", y: 10 },
                { x: "Tue", y: 15 },
                { x: "Wed", y: 13 },
                { x: "Thu", y: 15 },
                { x: "Fri", y: 10 }
              ]
            ]}
          />
        </div>
      </div>
    );
  }
}
