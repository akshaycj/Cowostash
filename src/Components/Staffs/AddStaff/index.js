import React, { Component } from "react";
import "./index.css";
import { message, Icon, Input } from "antd";
import SquareCard from "../../SquareCard";
import Util from "../../../Utils";

const Utils = new Util();
const Search = Input.Search;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: false,
      data: [],
      name: "",
      email: "",
      enable: false,
      searchValue: ""
    };
  }
  onAdd = () => {
    this.setState({ staff: !this.state.staff });
  };

  alreadyExist = (a, b) => {
    return a.indexOf(b) != -1;
  };
  addCard() {
    if (this.state.name !== "" && this.state.email !== "") {
      if (Utils.emailValidation(this.state.email)) {
        const data = this.state.data;
        const email = this.state.email;
        const name = this.state.name;
        if (data.length != 0) {
          console.log("----------", data);

          if (
            data.some(function(el) {
              return el.email === email;
            })
          ) {
            message.error("Already exists!");
          } else {
            data.push({ name, email });
            this.setState({ data });
          }
        } else {
          data.push({ name, email });
          this.setState({ data });
        }
      } else {
        message.error("Enter a valid email");
      }
    }
  }
  onName = e => {
    this.setState({ name: e.target.value });
  };
  onEmail = e => {
    this.setState({ email: e.target.value });
  };

  onEnable = a => {
    console.log("sss--", a);
  };

  onFilter = item => {
    return (
      item.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1
    );
  };

  render() {
    return (
      <div className="Staffs-main">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="theme-button Staffs-Add" onClick={this.onAdd}>
            Add a Staff
            <Icon style={{ fontSize: "18px" }} type="plus" />
          </div>
          <div className="Staffs-Search">
            <Input
              placeholder="Search"
              onChange={q => {
                this.setState({ searchValue: q.target.value });
              }}
              style={{
                borderRadius: 300,
                margin: 4,
                height: 24,
                maxWidth: "100%"
              }}
            />
          </div>
        </div>

        {this.state.staff ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <hr className="Staffs-Line" />
            <Input
              className="Staffs-Input"
              onChange={this.onName}
              placeholder="Name"
            />
            <div>
              <Input
                className="Staffs-Input"
                onChange={this.onEmail}
                placeholder="Email"
              />
              <div
                onClick={this.addCard.bind(this)}
                className="theme-button Staffs-Add-Button"
              >
                Add
              </div>
            </div>
            <hr className="Staffs-Line" />
          </div>
        ) : null}
        <div className="Staffs-Added-div">
          {" "}
          {this.state.data.filter(this.onFilter).map(item => {
            return (
              <div style={{ display: "flex" }}>
                {" "}
                <SquareCard
                  staff={true}
                  img={true}
                  title={item.name}
                  onValue={this.onEnable.bind(this)}
                  type="staff"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
