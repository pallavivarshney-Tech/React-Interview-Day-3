import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [counter,setCounter]= useState(0);
const [counterTwo,setCounterTwo]= useState(10);

    const Increment=()=>{
setCounter(counter+2)

    }
    const Decrement=()=>{
        setCounterTwo(counterTwo-2)
        
            }
    useEffect(()=>{
        document.title=`you ${counter}`
        console.log("useEffect Working ...");
        // return ()=>{
        //     console.log("component Will Unmount");
        // }
    })


  return (
    <div>
        <h1>{counter} &nbsp;{counterTwo}</h1>
        
    <button onClick={Increment}>Click Me </button>
    <button onClick={Decrement}>Click it </button>
    </div>
  )
}

export default UseEffect