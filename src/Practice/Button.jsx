import React, { Component } from 'react'
import UpdatedComponent from './NewCompo';
 class Button extends Component {
  
  render() {
    return (
      <div>
    <h1>button click {this.props.count} </h1>
    <button onClick={this.props.submit}>click</button>
      </div>
    )
  }
}
export default UpdatedComponent(Button)