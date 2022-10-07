import React, { Component } from 'react'
import NewComponent from './NewComponent'
 class ButtonClick extends Component {
   
  render() {
    return (
      <div>
        <h1>button click</h1>
        <button onClick={this.props.changeMarks}>Click  times {this.props.count}</button>
      </div>
    )
  }
}
export default NewComponent(ButtonClick);