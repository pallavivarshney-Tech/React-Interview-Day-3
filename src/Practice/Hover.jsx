import React, { Component } from 'react'
import UpdatedComponent from './NewCompo';
 class Hover extends Component {
  
  render() {
    return (
      <div>
   <h1 onMouseOver={this.props.submit}>hover {this.props.count}</h1>
      </div>
    )
  }
}

export default UpdatedComponent(Hover)