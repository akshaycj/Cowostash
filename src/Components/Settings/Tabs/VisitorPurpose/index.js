import React, { Component } from "react";
import "./index.css";
import SquareCard from "../../../SquareCard";
import { message } from "antd";
import box from "../../../../Res/box.png";
import guest from "../../../../Res/guest.png";
import employee from "../../../../Res/employee.png";
import maintenance from "../../../../Res/maintenance.png";
import teamwork from "../../../../Res/teamwork.png";
import AddField from "../../AddField";
import { AUTH, BASE_URL } from "./../../../../Utils/Api";
import Util from "../../../../Utils";

const Utils = new Util();

const url =
  BASE_URL + "dashboard/companies/" + Utils.getCompanyId() + "/type_of_visits";

export default class extends Component {
  state = {
    addField: false
  };

  componentDidMount() {
    fetch(url, {
      method: "GET",
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
        if (data) {
          console.log("got--data", data);
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response.data.error, "Error", "error");
      });
  }
  onEnable = a => {
    console.log("sss--", a);
  };
  onAddField = () => {
    this.setState({ addField: true });
  };
  onGoback = () => {
    this.setState({ addField: false });
  };
  onSave = (data, formTitle) => {
    // var postData = {
    //   type_of_visits: {
    //     name: formTitle,
    //     form_fields: data
    //   }
    // };

    var postData = {
      type_of_visit: {
        name: formTitle,
        form_fields_attributes: data
      }
    };

    console.log("post--", JSON.stringify(postData));

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      },
      body: JSON.stringify(postData)
    })
      .then(res => {
        console.log("Res---", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          message.success(data.message);
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response.data.error, "Error", "error");
      });
  };
  render() {
    return (
      <div className="">
        {this.state.addField ? (
          <AddField onGoback={this.onGoback} onSave={this.onSave} />
        ) : (
          <div>
            <div
              className="theme-button"
              onClick={this.onAddField}
              style={{ width: 150, marginLeft: "auto" }}
            >
              Add Purpose +
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 10,
                margin: 15
              }}
            >
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Interview"
                src={teamwork}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Guest"
                src={guest}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Vendor"
                src={box}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Employee"
                src={employee}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Maintenance"
                src={maintenance}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Interview"
                src={teamwork}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Guest"
                src={guest}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Vendor"
                src={box}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Employee"
                src={employee}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Maintenance"
                src={maintenance}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
