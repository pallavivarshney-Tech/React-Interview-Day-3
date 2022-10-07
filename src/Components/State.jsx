import React, { useState } from 'react'

const State = () => {
    const [myName,setMyName]=useState('lavi')
  const Update =()=>{
    setMyName('pallavi')
  }
  return (
    <div>
        <h1>current name is {myName}</h1>
        <button onClick={Update}>Update</button>
    </div>
  )
}

export default State;