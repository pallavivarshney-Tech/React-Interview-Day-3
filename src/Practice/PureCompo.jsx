import React, { PureComponent } from 'react'

 class PureCompo extends PureComponent {
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }
    submit=()=>{
        this.setState({counter:this.state.counter})
    }
  render() {
    console.warn("component will not rerender");
    return (
      <div>
        <h1>Pure Component {this.state.counter}</h1>
        <button onClick={this.submit}>update-2</button>
      </div>
    )
  }
}

export default PureCompo
