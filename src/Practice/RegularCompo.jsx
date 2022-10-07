import React, { Component } from 'react'


class RegularCompo extends Component {
    constructor(){
        super();
        this.state={
            counter:1,
        }
    }
    Submit=()=>{
        this.setState({counter:this.state.counter=1})
    }
    render() {
      console.warn("component re-render");
    return (
      <div>
        <h1>Regular Components {this.state.counter}</h1>
        <button onClick={this.Submit}>update</button>
      </div>
    )
  }
}

export default RegularCompo