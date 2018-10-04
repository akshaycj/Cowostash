import React, { Component } from 'react';
import './index.css'

export default class Box extends Component {




  render() {

   

    return (
      <div className="main-rect" >
      <div className="box-top-text-layer" >
        {this.props.top}
      </div>
        <div className="box-text-layer" >
          {this.props.main}
        </div>
      </div>
    );
  }
}

