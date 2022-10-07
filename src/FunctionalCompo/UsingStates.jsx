import React, { useState } from 'react'

const UsingStates = () => {
  const [count,setCount]=useState(0)
  const click=()=>{
    setCount(count+1)
  }
  return (
    <>

    <div>UsingStates</div>
    <h1>{count}</h1>
    <button onClick={click}>update</button>
    </>
  )
}

export default UsingStates