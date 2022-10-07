import React, { Component } from 'react'
import NewComponent from './NewComponent';
 class Hover extends Component {
   
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.changeMarks}>On hover marks changes {this.props.count}</h1>
      
      </div>
    )
  }
}
// export default NewComponent(Hover);