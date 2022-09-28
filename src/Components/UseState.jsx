import React,{useState} from 'react'

const UseState = () => {
    const [myName,setMyName]=useState('learning use state hooks');
    const changeName=()=>{
setMyName('use state hooks done ')
    }
  return (
    <div>
        <h2>Question-1</h2>
        <h3></h3>
        <h3>{myName}</h3>
        <button onClick={changeName}>click</button>
    </div>
  )
}

export default UseState