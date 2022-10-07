import React,{useState,useEffect} from 'react'
import UseEffect from './UseEffect'

const Effect = () => {
    const [num,setNum]=useState(0)
    const [numb,setNumb]=useState(0)
useEffect(()=>{
    alert('i m called')
})
    const changeIt=()=>{
        setNum(num-1)
    }
    const changeNumbers=()=>{
        setNumb(numb+1);
    }
  return (
    <>

    <div></div>
    <h1>{num}</h1>
    <button onClick={changeIt}>click{num} </button>
    <br/>
    <br/>
    <h4></h4>
    <button onClick={changeNumbers}>click here {numb}</button>
    <input type="text" name="" value=""/>
    </>
  )
}

export default Effect