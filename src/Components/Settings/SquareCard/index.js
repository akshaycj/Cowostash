import React, { Component } from "react";
import "./index.css";
import { Icon,Modal } from "antd";

export default class extends Component {

  constructor(props){
    super(props)
    this.state={
      enable:true,
      image:true,
      staff:false,
      visible: false
    }
  }

  onValue=()=>{
    return (this.state.enable)
  }

  onEn=()=>{
    this.setState({enable:!this.state.enable})
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render() {
    return (
      <div className="square-card-container">
        <div className="square-card">
          {this.props.img?null:<img
            src={this.props.src}
            style={{ alignSelf: "center" }}
            width={50}
            height={50}
          />}
          {this.props.staff ? <div style={{width:'50%',backgroundColor:'#d8d8d8',margin:'auto',height:'50%',borderRadius:'50%',fontSize:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.title.charAt(0).toUpperCase()}</div>:null}
          <div style={{ marginTop: 5,fontSize:'15px' }}>{this.props.title}</div>
          {this.state.enable?<Icon
            type="check-circle"
            style={{ alignSelf: "flex-end", marginRight: "auto" }}
          />:<Icon
          type="close-circle"
          style={{ alignSelf: "flex-end", marginRight: "auto" }}
        />}
        </div>
        <div className="square-card-menu">
          <div className="square-card-menu-inner">
            <div className="square-card-menu-inner-circle">
              {this.state.enable?<Icon
onClick={this.onEn}
                type="check-circle-o"
                style={{ alignSelf: "center", margin: "auto" }}
              />:
              <Icon type="close-circle" onClick={this.onEn} style={{ alignSelf: "center", margin: "auto" }}  />}
            </div>
            <div className="square-card-menu-inner-circle">
              <Icon
                type="form"
                style={{ alignSelf: "center", margin: "auto" }}
                
              />
              <Modal>
               <div>sadas</div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
