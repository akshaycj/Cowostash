import React, { Component } from "react";
import Util from "./../Utils/index";

const DataContext = React.createContext();

const Utils = new Util();

export class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      auth: Utils.getToken()
    };
  }
  onDataChange = data => {
    this.setState({ data });
  };

  onAuthChange = token => {
    console.log("auth ethi", token);
    const auth = "Bearer " + token;

    this.setState({ auth });
  };

  render() {
    return (
      <div>
        <DataContext.Provider
          value={{
            onDataChange: this.onDataChange,
            data: this.state.data,
            auth: this.state.auth,
            authChange: this.onAuthChange
          }}
        >
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}

export const DataContextConsumer = DataContext.Consumer;
