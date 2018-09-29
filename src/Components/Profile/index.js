import React, { Component } from "react";
import './index.css'
import {Input,Upload,Button,Icon,Modal,Cascader} from "antd"
import a from "../../Res/logo.svg"


const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',

}, {
  value: 'jiangsu',
  label: 'Jiangsu',
}];
export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      pic:a,
    }
  }
  onPic = e => {
    console.log(e);
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      this.setState({ pic: reader.result })
    );
    reader.readAsDataURL(e.file.originFileObj);
  };
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  
  render() {

    return (
      <div className="" style={{width:"100%",height:"100vh",backgroundColor:"white",padding:"15px"}}>
      <h2>PROFILE SETTINGS</h2>
      <div style={{width:"100%",height:1,backgroundColor:"#e6e6e6"}}/>
      <div  style={{display:"flex",justifyContent:"space-between",paddingRight:"40px",paddingTop:"20px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3>NAME</h3>
        <Input/>
        <h3>EMAIL</h3>
        <Input/>
        <h3>PHONE NUMBER</h3>
        <Input/>
        <h3>DEPARTMENT</h3>
        <Cascader options={options}  placeholder="Select a Department" />
        <h3>DESIGNATION</h3>
        <Input/>

        </div>
        <div style={{display:"flex",flexDirection:"column",textAlign:"flex-start"}}>
        <div><b>Avatar</b></div>
        <img style={{display:"inline-block",height:"6rem",width:"6rem",borderRadius:"100%"}}
        src={this.state.pic}
        />
         <Button style={{marginTop:"15px",fontSize:"12px"}} onClick={() => this.setModal1Visible(true)} >
                    <Icon type="upload"  />
                    Change Avatar
                  </Button>
                  <Modal
                title="Upload Logo"
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
              >
                <Upload onChange={this.onPic}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
              </Modal>
        </div>
      
      </div>
      
      </div>
    );
  }
}
