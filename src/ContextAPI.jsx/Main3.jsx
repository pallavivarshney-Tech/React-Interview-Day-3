import React, { createContext } from 'react'
import { useContext } from 'react'
import ChildA from './ChildA';

//create provider usecontext

//create provider consumer
const data = createContext();
const data1 = createContext();
const Main3 = () => {
    const name="lovely"
    const gender ="female"
  return (
    
    <div>
<data.Provider value={name}> 
<data1.Provider value={gender}>

    <ChildA />
</data1.Provider>
</data.Provider>
    </div>
  )
}

export default Main3
export {data,data1}