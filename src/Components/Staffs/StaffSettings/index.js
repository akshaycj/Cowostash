import React, { Component } from "react";
import './index.css'
import { Input, Icon, Upload, Button, Modal, Switch,message } from "antd";


const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default class  extends Component {

  constructor(props){
    super(props)
    this.state={
      modal1Visible: false,
      modal2Visible: false,
    
    }
  }
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {

    return (
      <div className="" >
      <div style={{width:"30px",marginLeft:"auto"}} className="theme-button">save</div>
      <div style={{display:"flex",padding:"10px"}} onClick={() => this.setModal1Visible(true)}><h3>Import Staff</h3><div style={{width:"100px",fontSize:"10px",marginLeft:"40px"}} className="theme-button">Import from csv</div></div>
      <div style={{display:"flex",padding:"10px"}} onClick={() => this.setModal2Visible(true)}><h3>Export Staff</h3><div style={{width:"100px",fontSize:"10px",marginLeft:"40px"}} className="theme-button">Export to csv</div></div>
      <h2>Departments</h2>
      <hr/>
      <div style={{display:"flex" ,padding:"10px"}}><h3 style={{marginLeft:"20px",marginBottom:"10px"}}>Departments</h3><div><Input style={{marginLeft:"22px",marginBottom:"10px"}} placeholder="Department Name"/><div style={{marginLeft:"22px"}} className="theme-button">Add Department</div></div></div>
      <Modal
                title="Import Csv"
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}
              >
              <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    
  </Dragger>,
              </Modal>
              <Modal
                title="Export Csv"
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false)}
                onCancel={() => this.setModal2Visible(false)}
              >
        <Button>
      <Icon type="download" /> Click to Download
    </Button>
              </Modal>
      </div>
    );
  }
}
