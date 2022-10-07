import React, { useState,useMemo } from 'react'

const UseMemo = () => {
const [counterOne,setCounterOne]= useState(0)
const [counterTwo,setCounterTwo]= useState(0)
const IncrementOne=()=>{
    setCounterOne(counterOne+1);
}
const IncrementTwo=()=>{
    setCounterTwo(counterTwo+1)
}
const isEven=useMemo(()=>{
  console.warn("....")
    let i=0;
    while(i<200000000) i++;
    return counterOne%2===0
},[counterOne])

  return (
    <div>
        <h1>use memo</h1>
        <button onClick={IncrementOne}>counter 1{counterOne}</button>
    <span>{isEven?"Even":"Odd"}</span>
    {/* <span>{isEven?"Even":"Odd"}</span> */}
        <button onClick={IncrementTwo}>counter 2{counterTwo}</button>
    </div>
  )
}

export default UseMemo