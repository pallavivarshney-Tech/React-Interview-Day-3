import React, { useRef, useState } from 'react'
const UseRef = () => {
  const luckyName =useRef(null);
  const [show,setShow]=useState(false)
 
  const submitForm=(e)=>{
    e.preventDefault();
    const name=luckyName.current.value;
    name===""? alert("pls dill this") : setShow(true);
  }
    return (
    <div>
      <h1>Use Ref</h1>
      <form action="" onSubmit={submitForm}>

      <label htmlFor=''>enter your name </label>
      <input type="text" ref={luckyName}></input><br/>
      
      <button>click it </button>
      <p>{show ? `your name is ${luckyName.current.value}` : ""}</p>
      </form>
    </div>
  )
}
export default UseRef

// import React,{useRef} from 'react'

// const UseRef = () => {
//   let InputRef=useRef(null);

//   const handleChange=()=>{
// console.log("function test");
// InputRef.current.value="pallavi"
// InputRef.current.focus();
// InputRef.current.style.color="pink"  
// InputRef.current.style.display="none";
// }

//   return (
//     <div>
//       <h1>use ref</h1>
//       <input type="text" ref={InputRef}></input>
//       <button onClick={handleChange}>click</button>
//     </div>
//   )
// }

// export default UseRef