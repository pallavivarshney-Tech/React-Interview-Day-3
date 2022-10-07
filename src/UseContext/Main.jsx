import React from 'react'
import { createContext } from 'react'
import ChildA from './ChildA'

const data =createContext();
const data1=createContext();

const Main = () => {
 //create, provider,usecontext
    const name="pallavi"
    const gender="female"
   
  return (
    <div>
<data.Provider value={name}>
<data1.Provider value={gender}>

<ChildA/>
</data1.Provider>
</data.Provider>
    </div>
  )
}

export default Main
export {data,data1}