import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }
return state;
}
const UseReducers = () => {
const [state,dispatch] =   useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>

        <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
    </div>
  )
}

export default UseReducers;