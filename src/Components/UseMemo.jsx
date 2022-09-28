import React, { useMemo, useState } from 'react'

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
  console.warn("......")
    let i=0;
    while(i<200000) i++;
    return counterOne%2===0
},[counterOne])

  return (
    <div>
    <h2>Question-4</h2>
    <h3>Implementation of Use Memo </h3>
        {/* <h1>use memo</h1> */}
        <button onClick={IncrementOne}>counter 1{counterOne}</button> &nbsp; &nbsp;
    <span>{isEven?"Even":"Odd"}</span> &nbsp; &nbsp;
        <button onClick={IncrementTwo}>counter 2{counterTwo}</button>
    </div>
  )
}

export default UseMemo