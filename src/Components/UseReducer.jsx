import React,{useReducer, useState} from 'react'

const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }
    return(state);

}


const UseReducer = () => {
const [state,dispatch] = useReducer(reducer,0);


    // const [count,setCount]=useState(0);
    // const changeIt=()=>{
    //     setCount(count+1)
    // }
    // const changeItt=()=>{
    //     setCount(count-1)
    // }
    

    
  return (
    <div>
        <h2>Question-3</h2>
        <h3>Implementation of Use reducer</h3>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button> &nbsp; &nbsp;
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  )
}


export default UseReducer