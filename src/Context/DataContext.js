import React, { Component } from "react";

const DataContext = React.createContext();

export class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  onDataChange = data => {
    console.log("entho ethi", data);

    this.setState({ data });
  };
  render() {
    return (
      <div>
        <DataContext.Provider
          value={{ onDataChange: this.onDataChange, data: this.state.data }}
        >
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}

export const DataContextConsumer = DataContext.Consumer;
