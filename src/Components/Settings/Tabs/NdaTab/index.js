import React, { Component } from "react";
import "./index.css";
import { Switch, Icon, Input, message } from "antd";
import SquareCard from "../../../SquareCard";
import Util from "./../../../../Utils/index";
import { BASE_URL, AUTH } from "./../../../../Utils/Api";

const { TextArea } = Input;
const Utils = new Util();
const url = BASE_URL + "/dashboard/companies/" + Utils.getCompanyId() + "/ndas";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      title: "",
      nda: "",
      data: []
    };
  }
  componentDidMount() {
    fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("incoming---", data);
      })
      .catch(error => {
        Utils.displayNotification(error.response.data.error, "Error", "error");
      });
  }
  onEnable = a => {
    console.log("sss--", a);
  };
  onAdd = () => {
    this.setState({ add: !this.state.add });
  };
  onTitle = e => {
    this.setState({ title: e.target.value });
  };
  onNDA = e => {
    this.setState({ nda: e.target.value });
  };
  onAddButton = () => {
    var that = this;
    if (this.state.title && this.state.nda !== "") {
      const data = this.state.data;
      const nda = {
        nda: { title: this.state.title, active: true, content: this.state.nda }
      };
      data.push({ title: this.state.title, nda: this.state.nda });

      fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: AUTH
        },
        body: JSON.stringify(nda)
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          that.setState({ data });

          message.success(data.message);
        })
        .catch(error => {
          Utils.displayNotification(
            error.response.data.error,
            "Error",
            "error"
          );
        });
    }
  };
  getdata(data) {}
  render() {
    return (
      <div style={{ overflowY: "auto", height: "95%" }}>
        <div className="NDA-main">
          <div style={{ display: "flex" }}>
            <h2>Enable NDA</h2>
            <Switch
              style={{ backgroundColor: "black", marginLeft: "10%" }}
              onChange={this.onPhotoCaptureTRiggered}
            />
          </div>
          <div
            className="theme-button"
            onClick={this.onAdd}
            style={{
              width: "150px",
              display: "flex",
              alignSelf: "flex-end",
              justifyContent: "space-evenly"
            }}
          >
            Add NDA <Icon style={{ fontSize: "18px" }} type="plus" />
          </div>
        </div>
        {this.state.add ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <hr style={{ width: "95%", marginTop: "2%" }} />
            <Input
              style={{ marginTop: "1%", width: "320px" }}
              onChange={this.onTitle}
              placeholder="Title"
            />
            <div>
              <TextArea
                style={{ marginTop: "2%", width: "320px" }}
                onChange={this.onNDA}
                placeholder="NDA"
                autosize={{ minRows: "6" }}
              />
              <div
                style={{ width: "80px", height: "30px", marginTop: "1%" }}
                onClick={this.onAddButton}
                className="theme-button"
              >
                Add
              </div>
            </div>
          </div>
        ) : null}
        <hr style={{ width: "95%", marginTop: "3%" }} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <SquareCard
            img={true}
            onValue={this.onEnable.bind(this)}
            title="Standard Template NDA1"
          />
          {this.state.data.map(item => {
            return (
              <div>
                <SquareCard
                  img={true}
                  onValue={this.onEnable.bind(this)}
                  getdata={this.getdata.bind(this)}
                  title={item.title}
                  edit={false}
                  edit1={true}
                  edit2={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
