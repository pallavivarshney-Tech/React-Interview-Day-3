import React, {  useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {

 const [counter,setCounter] =  useState(0);
 const [counterTwo,setCounterTwo] =  useState([]);

   const submit=()=>{
    
    setCounter(counter+1)
   }
  const func=useCallback(()=>{
    console.log("hello");
  },counterTwo)
  return (
    <div>
  <h1>{counter}</h1>
  <button onClick={submit}>click</button>
      <Child counterTwo={counterTwo} func={func}/>
    </div>
  )
}

export default Parent