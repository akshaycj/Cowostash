import React, { Component } from "react";
import "./index.css";
import { Card, Input, Icon, Table } from "antd";
import Util from "../../Utils";
import { BASE_URL } from "./../../Utils/Api";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "User Login Id",
    dataIndex: "code",
    key: "code"
  },
  {
    title: "Token ID",
    key: "token_code",
    dataIndex: "token_code"
  },
  {
    title: "Delete",
    key: "Delete",
    render: (text, record) => (
      <span>
        <Icon type="delete" theme="outlined" />
      </span>
    )
  }
];

const data = [
  {
    id: "1",
    name: "john Doe",
    code: "12345",
    token: "25"
  },
  {
    id: "1",
    name: "john Doe",
    code: "12345",
    token: "25"
  }
];

const Utils = new Util();
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: true,
      data: []
    };
  }
  componentDidMount() {
    var that = this;
    const url =
      BASE_URL +
      "dashboard/companies/" +
      Utils.getCompanyId() +
      "/users/" +
      Utils.getUserId() +
      "/devices";

    const test =
      BASE_URL +
      "dashboard/companies/" +
      Utils.getCompanyId() +
      "/type_of_visits";
    const auth = "Bearer " + Utils.getToken();
    console.log("auth--", auth);

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: auth
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("devices" + Utils.getToken(), data);
        that.setState({ data: data.devices });
      });
  }
  render() {
    return (
      <div className="devices-main">
        <div className="devices-sub">
          <div className="Devices-search">
            <Input
              placeholder="search for a device"
              style={{
                width: "200px",
                borderRadius: 300,
                marginLeft: 4,
                height: 30
              }}
            />
            <div className="devices-button">
              <Icon type="search" theme="outlined" />
            </div>
          </div>
          <div
            className="theme-button"
            style={{ width: "200px", height: "40px" }}
          >
            Add Device{" "}
            <Icon style={{ fontSize: "18px" }} type="plus" theme="outlined" />
          </div>
        </div>
        {this.state.table ? (
          <Table
            style={{ marginTop: "30px" }}
            columns={columns}
            dataSource={this.state.data}
          />
        ) : null}
      </div>
    );
  }
}
