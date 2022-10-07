import React, { Component } from 'react'

 class States extends Component {
  constructor(){
    super();
    this.state={
      name:"pallavi"
    }
  }
  Updated=()=>{
    this.setState({name:this.state.name="lovely"})
  }
  render() {
    return (
      <div>
      <h1>this is an example of using states in class Component</h1>
        <h2>my name is {this.state.name}</h2>
        <button onClick={this.Updated}>Update</button>
      </div>
    )
  }
}
export default States;