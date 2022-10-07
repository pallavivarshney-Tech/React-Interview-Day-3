
import React, { useContext } from 'react'
import {data,data1} from './Main2'
const ChildF = () => {
    const name=useContext(data);
    const gender=useContext(data1);
  return (
    <div>
        <h1>my name is {name} and my gender is {gender}</h1>
    </div>
  )
}

export default ChildF