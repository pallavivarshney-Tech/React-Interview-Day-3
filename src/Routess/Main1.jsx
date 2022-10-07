import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home1 from './Home1'
import About1 from './About1'
import Contact1 from './Contact1'
import Nav from './Nav'
import Err from './Err'
import Nest from './Nest'
const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
<Route path='/home' element={<Home1/>}/>
<Route path ='/about' element={<About1/>}/>
<Route path ='contact' element={<Contact1/>}/>
<Route path ='*' element={<Err/>}/>
<Route path ='page' element={<Nest/>}/>
<Route path='pallavi' element={<Nest/>}/>
<Route path ='me' element={<Nest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main