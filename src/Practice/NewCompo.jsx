import React from 'react'

const UpdatedComponent=OriginalComponent=>{
  class NewComponent extends React.Component{
    constructor(){
      super();
      this.state={
        count:0,
      }
    }
    submit=()=>{
      this.setState({count:this.state.count+1})
    }
render(){
  return <OriginalComponent count={this.state.count}
    submit={this.submit}
  />

}

  }
  return NewComponent;
}

export default UpdatedComponent;