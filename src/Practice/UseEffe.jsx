import React,{useEffect, useState} from 'react'

const UseEffe = () => {
 const [counter,setCounter]= useState(0)
 const [counterTwo,setCounterTwo]= useState(10)
  const Increase=()=>{
    setCounter(counter + 3)
  }
  const Decrease=()=>{
    setCounterTwo(counterTwo - 1)
  }
  useEffect(()=>{
    document.title=`react ${counter}`
    console.log("components DidMount...");
  },[counterTwo])
  return (
    <div>
        <h1>{counter}&nbsp; &nbsp;{counterTwo}</h1>
        <button onClick={Increase}>click</button>
        <button onClick={Decrease}>click It</button>
    </div>
  )
}

export default UseEffe;