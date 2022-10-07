import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super();
        this.state={
           
            counter:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount...");
        document.title=`react ${this.state.counter}`
        
    }
    componentDidUpdate(){
        console.log("componentDidUpdate...");
        document.title=`you ${this.state.counter}`
        
    }
   Increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
   
    componentWillUnmount(){
        console.log("component will unmount ....");
    }
  
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.Increment}>CLICK YOU </button>
       
      
      </div>
    )
  }
}
