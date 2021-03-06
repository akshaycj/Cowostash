import React, { Component } from "react";
import "./index.css";
import Graph from "../Graph";
import Calendar from "react-calendar";
import Box from "../Box";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { BASE_URL } from "../../Utils/Api";
import Util from "../../Utils";
import { DataContextConsumer } from "../../Context/DataContext";

const Utils = new Util();

const url = BASE_URL + "dashboard/companies/" + Utils.getCompanyId();

export default props => (
  <DataContextConsumer>
    {({ auth }) => <Dashboard {...props} auth={auth} />}
  </DataContextConsumer>
);

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartdata: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: "Visitors",
            data: [12, 19, 3, 17, 6, 3, 7],
            borderColor: "black"
          }
        ]
      }
    };
  }

  componentDidMount() {
    // var data = {
    //   company: { subscription_plan: "enterprise" }
    // };
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: this.props.auth
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     console.log("red00", data);
    //   })
    //   .catch(error => {
    //     Utils.displayNotification(error.response.data.error, "Error", "error");
    //   });
  }

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
        <div className="DashBoard-container">
          <Box top="Check-ins Today" main="98" />
          <Box top="Total Check-ins" main="5322" />
          <Box top="User Registered" main="463" />
        </div>
        <div
          className="DashBoard-container"
          style={{
            marginLeft: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="Dashboard-Graph">
            <div>
              <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
                Check-ins
              </h3>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="theme-button" style={{ margin: "10px" }}>
                  Day
                </div>
                <div className="theme-button" style={{ margin: "10px" }}>
                  week
                </div>
                <div className="theme-button" style={{ margin: "10px" }}>
                  Month
                </div>
              </div>
            </div>
            <Line
              height="30%"
              width="100%"
              type="line"
              data={this.state.chartdata}
            />
          </div>

          <div style={{ marginLeft: 40, marginTop: "10px" }}>
            <Calendar style={{ width: 600 }} />
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
