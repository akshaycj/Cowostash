import React, { Component } from "react";
import './index.css'
import {Card,Input,Icon,Table} from "antd"
const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
 
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'User Login Id',
  dataIndex: "userloginid",
  key: 'userloginid',
}, {
  title: 'Token ID',
  key: 'token',
  dataIndex: 'token',
  
  
}, {
  title: 'Delete',
  key: 'Delete',
  render: (text, record) => (
    <span>
 
 <Icon type="delete" theme="outlined" />
    </span>
  )
}];

const data = [ {
  id:"1",
  name:"john Doe",
  userloginid:"12345",
  token:"25"
}, {
  id:"1",
  name:"john Doe",
  userloginid:"12345",
  token:"25"
}];

export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      table:true,
    }
  }
  render() {

    return (
      <div className="devices-main" >
      <div className="devices-sub">
      <div className="Devices-search" >
              <Input placeholder="search for a device" style={{width:"200px", borderRadius: 300, marginLeft: 4, height: 30 }} />
              <div className="devices-button"><Icon type="search" theme="outlined" /></div>
            </div>
      <div className="theme-button" style={{width:"200px",height:"40px"}}>Add Device <Icon style={{fontSize:"18px"}} type="plus" theme="outlined" /></div>
      </div>
     {
       this.state.table?
       <Table style={{marginTop:"30px"}} columns={columns} dataSource={data} />:null
     }
      </div>
    );
  }
}
