import React, { Component } from 'react'
import Counter from './Counter';
class LifeCycleMethods extends Component {
constructor(){
    super();
    this.state={
        count:0
    }
}
componentDidMount(){
    console.log("componentDidMount:when render first time on DOM");
}
Increment(){
   this.setState({count:this.state.count+1})
}
componentWillUnmount(){
    console.log("component willunmount.");
}
  render() {
    return (
        <>
<Counter number={this.state.count} />
      <div>

      </div>
      {/* <button onClick={this.Increment.bind(this)}>click me</button> */}
      <button onClick={()=>{this.Increment()}}>click it</button>
        </>
    )
  }
}


export default LifeCycleMethods;