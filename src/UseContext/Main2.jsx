import React, { createContext } from 'react'
import ChildD from './ChildD';

// create provider usecontext

const data = createContext();
const data1=createContext();

const Main2 = () => {
    const name="lavi"
    const gender="female"
  return (
    <div>
    <data.Provider value={name}>
    <data1.Provider value={gender}>

    <ChildD />
    </data1.Provider>
    </data.Provider>

    </div>
  )
}

export default Main2
export {data,data1}