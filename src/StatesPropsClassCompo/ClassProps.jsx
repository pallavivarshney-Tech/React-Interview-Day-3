import React, { Component } from 'react'

export default class ClassProps extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
      <div>
           <h1>this is an example of using props in class Component</h1>
        <h2>my gender is {this.props.gender}</h2>
      </div>
    )
  }
}
