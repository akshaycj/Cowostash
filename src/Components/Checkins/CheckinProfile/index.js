import React, { Component } from "react";
import './index.css'
import {Link} from "react-router-dom"
import {Icon,Select,Input } from "antd"
const Option = Select.Option;
const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <div>
    <Icon style={{fontSize:"23px",marginTop:"-10px"}} type="user" theme="outlined" />

    </div>
  </Select>
)
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
              <div style={{padding:"20px",display:"flex",flexDirection:"column"}}>
              <Input style={{width:"360px",margin:"10px"}} addonBefore={<div><Icon style={{fontSize:"23px"}} type="user" theme="outlined" />Name</div>} defaultValue={this.state.name} />
              <Input style={{width:"360px",margin:"10px"}} addonBefore={<div><Icon style={{fontSize:"23px"}} type="mail" theme="outlined" />Email</div>} defaultValue={this.state.email} />
              <Input style={{width:"360px",margin:"10px"}} addonBefore={<div><Icon style={{fontSize:"23px"}} type="mobile" theme="outlined" />Phone</div>} defaultValue={this.state.phone} />
              <Input style={{width:"360px",margin:"10px"}} addonBefore={<div><Icon style={{fontSize:"23px"}} type="team" theme="outlined" />Company</div>} defaultValue={this.state.company} />
              </div>
        </div>
      </div>
    );
  }
}
