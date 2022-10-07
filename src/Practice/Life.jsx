import React, { Component } from 'react'

export default class Life extends Component {

    constructor(){
        super();
        this.state={
        counter:0
        }
    }
    Increment=()=>{
        this.setState({counter:this.state.counter+4})

    }
    componentDidMount(){
        document.title= `react ${this.state.counter}`
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        document.title=`react ${this.state.counter}`
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("component willunmount");
    }
  render() {
    return (
      <div>
     <h1>{this.state.counter}</h1>
     <button onClick={this.Increment}>click it</button>
      </div>
    )
  }
}
