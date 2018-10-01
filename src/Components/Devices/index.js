import React, { Component } from "react";
import "./index.css";
import { Card, Input, Icon, Table, Popconfirm, Modal } from "antd";
import Util from "../../Utils";
import { BASE_URL } from "./../../Utils/Api";

const Utils = new Util();
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: true,
      data: [],
      newDeviceName: "",
      loading: true,
      add: false
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
        that.setState({ data: data.devices, loading: false });
      });
  }

  onDelete = id => {
    console.log("id:", id);
  };
  onAdd = () => {
    this.setState({ add: true });
  };
  onCancel = () => {
    this.setState({ add: false });
  };

  onConfirm = () => {};

  render() {
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
            <Popconfirm
              title="Are you sure？"
              okText="Yes"
              cancelText="No"
              onConfirm={this.onDelete.bind(this, record.id)}
            >
              <Icon
                type="delete"
                style={{ fontSize: 18, cursor: "pointer" }}
                theme="outlined"
              />
            </Popconfirm>
          </span>
        )
      }
    ];
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
            onClick={this.onAdd}
          >
            Add Device{" "}
            <Icon style={{ fontSize: "18px" }} type="plus" theme="outlined" />
          </div>
        </div>
        <Table
          loading={this.state.loading}
          style={{ marginTop: "30px" }}
          columns={columns}
          dataSource={this.state.data}
        />
        <Modal
          visible={this.state.add}
          onCancel={this.onCancel}
          onOk={this.onConfirm}
          footer={[
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{ width: 25, marginLeft: 5 }}
                className="theme-button"
                onClick={this.onConfirm}
              >
                Add
              </div>
              <div
                onClick={this.onCancel}
                style={{ width: 25, marginLeft: 5 }}
                className="theme-button"
              >
                Cancel
              </div>
            </div>
          ]}
        />
      </div>
    );
  }
}
