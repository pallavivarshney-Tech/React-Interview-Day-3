import React,{useRef, useState} from 'react'

const Ref = () => {
    const luckyName=useRef(null);
    const [show,setShow]=useState(false)
    const submitForm=(e)=>{
        e.preventDefault();
        const name=luckyName.current.value;
        name==="" ? alert("pls fill it"):setShow(true)
    }
  return (
    <div>
        <h1>use ref</h1>
        <form action="" onSubmit={submitForm}>
            <label htmlFor=''>enter your name</label>
            <input type="text" ref={luckyName}></input>
            <button>submit </button>
            <p>{show ? `your name is ${luckyName.current.value}` : ""}</p>
        </form>
    </div>
  )
}

export default Ref