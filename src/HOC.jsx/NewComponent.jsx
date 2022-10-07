import React from 'react'

const NewComponent=WrappedComponent=>{
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state={
                count:0,
            }
        }
        changeMarks=()=>{
            this.setState({count:this.state.count+2})
        }
        render(){
            return <WrappedComponent count={this.state.count}
                changeMarks={this.changeMarks}
            />
        }
    }
    return NewComponent
}
export default NewComponent;