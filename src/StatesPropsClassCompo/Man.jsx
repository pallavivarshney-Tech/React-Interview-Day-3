import React, { Component } from 'react'
import ClassProps from './ClassProps'

export default class Man extends Component {
  render() {
    return (
      <div>
        <ClassProps gender={"female"}/>
      </div>
    )
  }
}
