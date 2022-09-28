import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [num,setNum]=useState(0);
    const[nums,setNums]=useState(0);
    useEffect(()=>{
        alert('i am clicked')

    },[num])
    const changeNumber=()=>{
        setNum(num+1);
        // setNums(num+1);
    }
    const changeNumbers=()=>{
        // setNum(num+1);
        setNums(nums-1);
    }
    
    
  return (
    <>

    <div></div>
    <h2>Question-2</h2>
    <h3>What is useEffect Hook ?(Implementation)</h3>
    <button onClick={changeNumber}>Increment {num}</button>
    <br/>
    <br/>
    <button onClick={changeNumbers}>Decrement {nums}</button>
    </>
  )
}

export default UseEffect