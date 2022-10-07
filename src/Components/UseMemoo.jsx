import React, { useMemo, useState } from 'react'

const UseMemoo = () => {
const [counterOne,setCounterOne] =  useState(0);
const [counterTwo,setCounterTwo]=useState(0);

const changeHandle=()=>{
    setCounterOne(counterOne+1)
}
const changeHandlee=()=>{
    setCounterTwo(counterTwo+1)
}
const isEven=useMemo(()=>{
    let i=0;
    while(i<200000000) i++;
    return counterOne%2===0;
},[counterOne])

  return (
    <div>
        <h1>use memo</h1>
        <button onClick={changeHandle}>click it {counterOne} </button>
   <span>{isEven?"Even":"Odd"}</span>
        <button onClick={changeHandlee}>click it {counterTwo} </button>
  
    </div>
  )
}

export default UseMemoo