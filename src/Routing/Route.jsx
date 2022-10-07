import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Nested from './Nested'
import Error from './Error'
import Users from './Users'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
<Navbar />
            <Routes>
<Route path='/' element={<Home />}>

</Route>
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />}/>
<Route path ='*' element={<Error/>}/>
<Route path="/nesting" element={<Nested/>}/>
<Route path='/users/:name/:age' element={<Users/>}/>

            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing