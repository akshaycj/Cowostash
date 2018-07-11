import React, { Component } from "react";
import './index.css'
import logo from '../../Res/logo.svg'
import { Select } from 'antd'



const Option = Select.Option;


const purposes = [
  {
    data: 'Delivery Boy',
    value: 'db',
  },
  {
    data: 'Employee',
    value: 'emp',
  },
  {
    data: 'Contract Employee',
    value: 'ce',
  },
  {
    data: 'Vendor',
    value: 'ven',
  },
  {
    data: 'Maintanence Worker',
    value: 'mw',
  },
  {
    data: 'Guest, Family & Friends',
    value: 'fam',
  },
  {
    data: 'Interview',
    value: 'int',
  },
  {
    data: 'Event',
    value: 'evt',
  },
  {
    data: 'Other',
    value: 'otr',
  }

]

export default class extends Component {


  render() {



    return (
      <div className="visitor-layout" >
        <div className="visitor-main" >
          <img src={logo} width={60} height={60} />
          <div className="visitor-card" >
            <div className="visitor-card-text" >
              Select purpose of your visit
            </div>
            <div>
              <Select
                className="visitor-card-select"
                placeholder="Select purpose"
              >
                
                {purposes.map((data) => <Option value={data.value} >{data.data} </Option>)}


              </Select>
            </div>
            <div className="visitor-bottom-button" >
              Next >
            </div>
          </div>
        </div>

        <div className="visitor-bottom-text" >
          help@cowostash.com
        </div>
      </div>
    );
  }
}
