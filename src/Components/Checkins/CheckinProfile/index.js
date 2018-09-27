import React, { Component } from "react";
import './index.css'
import {Link} from "react-router-dom"
import {Icon } from "antd"
export default class  extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
      data: [],
      date:"24/05",
      time:"15:33",
      name:"sam",
      company:"GOT",
      email:"winteriscoming@gmail.com",phone:"9444333333"
    }
  }

  render() {

    return (
      <div className="" >
      <div className="checkin-profile-header" style={{height:"60px",padding:"10px"}} >
        <Link to="/checkins" style={{color:"white"}}>
        <div className="theme-button" style={{width:"50px"}}>Back  </div>
        </Link> 
        </div>
        <div className="checkin-profile-header" style={{top:"30px"}} >
        <div>
        <div style={{ display: "flex", }}>
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="checkin-profile-image" alt="avatar" />
            <div>
              <h2 style={{ position: "relative", left: "25px" }}>{this.state.name}</h2>
              <div style={{ display: "flex" }}>
                <h3 style={{ position: "relative", left: "25px", bottom: "10px" }}>{this.state.date}</h3>
                <h3 style={{ position: "relative", left: "30px", bottom: "10px" }}>{this.state.time}</h3>
              </div>
            </div>
          </div>  
              </div>
              <hr style={{backgroundColor:"#e6e6e6",marginTop:"20px"}}/>
              <div className="checkin-profile-display">
              <Icon style={{fontSize:"23px",marginTop:"-10px"}} type="user" theme="outlined" />
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>Name</h3>
              <vl/>
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>{this.state.name}</h3>
              </div>
              <div className="checkin-profile-display">
              <Icon style={{fontSize:"23px",marginTop:"-10px"}} type="mail" theme="outlined" />
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>Email</h3>
              <vl/>
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>{this.state.email}</h3>
              </div>
              <div className="checkin-profile-display">
              <Icon style={{fontSize:"23px",marginTop:"-10px"}} type="mobile" theme="outlined" />
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>Phone</h3>
              <vl/>
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>{this.state.phone}</h3>
              </div>
              <div className="checkin-profile-display">
              <Icon style={{fontSize:"23px",marginTop:"-10px"}} type="team" theme="outlined" />
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>Company</h3>
              <vl/>
              <h3 style={{marginTop:"-10px",marginLeft:"10px"}}>{this.state.company}</h3>
              </div>
        </div>
      </div>
    );
  }
}
