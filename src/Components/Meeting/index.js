import React from 'react'
import "./index.css"
import { Steps, Button, Select , message , Input , Slider} from 'antd';

const Step = Steps.Step;
const InputGroup = Input.Group;
const Option = Select.Option;

const style = {
  height: 300,
  marginLeft: 50,
};

const steps = [{
  title: 'Time Slot',
  content:'time slot',
}, {
  title: 'Availability',
  content:
      <div style={{width : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "row"}}>
        <div style={{height : "360px" , marginLeft : "50" , marginBottom : "-30px", display : "flex" , flexDirection : "column" }}>
          <div style={{height : "40px" , fontSize : "15px" }}> </div>
          <div style={{height : "40px"  , fontSize : "15px" }}>12</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>11</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>10</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>9</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>8</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>7</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>6</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>5</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>4</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>3</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>2</div>
          <div style={{height : "40px"  , fontSize : "15px" }}>1</div>
        </div>
        <div style={style}>
          <div>Sun</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[1, 6]} />
        </div>
        <div style={style}>
          <div>Mon</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[6, 10]} />
        </div>
        <div style={style}>
          <div>Tue</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[2, 6]} />
        </div>
        <div style={style}>
          <div>Wed</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[8, 12]} />
        </div>
        <div style={style}>
          <div>Thu</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[1, 4]} />
        </div>
        <div style={style}>
          <div>Fri</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[1, 2]} />
        </div>
        <div style={style}>
          <div>Sat</div>
          <Slider vertical range step={1} max={12} min={1} defaultValue={[2, 9]} />
        </div>
      </div> ,
}, {
  title: 'Form Questions',
  content:
    <div style={{width : 350 , display : "flex" , alignItems : "center" , justifyContent : "flex-start" , flexDirection : "column"}}>
    <div style={{width : "350px" , display : "flex" , flexDirection : "row" , alignItems : "center" ,paddingRight : "30px", }}>
      <div style={{padding : "20px"}}>Name</div>
      <Input style={{width : "200px"}} placeholder="Basic usage" />
    </div>
    <div style={{width : "100%" , display : "flex" , flexDirection : "row" , alignItems : "center" ,paddingRight : "50px", }}>
      <div style={{padding : "20px" , paddingRight : "-10px"}}>Email</div>
      <Input style={{width : "100%"}} defaultValue="Xihu District, Hangzhou" />
    </div>
    <div style={{width : "350px" , display : "flex" , flexDirection : "row" , alignItems : "center" ,paddingRight : "30px", }}>
      <div style={{padding : "20px"}}>Organization</div>
      <Input style={{width : "200px"}} placeholder="Basic usage" />
    </div>
    <div style={{width : "350px" ,  display : "flex" , flexDirection : "row" , alignItems : "center" ,paddingRight : "30px", }}>
      <div style={{padding : "20px"}}>Phone</div>
      <Input style={{width : "200px"}} placeholder="Basic usage" />
    </div>
    </div>,
}];

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      current : 0 ,

    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render(){
    const { current } = this.state;
    return(
      <div className="screen1">
      <div style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
        {
            current > 0
            && (
              <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )
          }
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          
          </div>
      </div>
      </div>
    )
  }
}
