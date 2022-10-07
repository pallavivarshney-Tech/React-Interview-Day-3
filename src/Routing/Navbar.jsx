import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='pallavi'>
        <ul>
            <li>
    <NavLink to='/'>hOME</NavLink>

            </li>
            <li>
    <NavLink to='/about'>aBOUT</NavLink>

            </li>
            <li>
    <NavLink to ='/contact'>cONTACT</NavLink>

            </li>
            <li>
    <NavLink to ='/users'>Users</NavLink>

            </li>
        </ul>
    </div>
  )
}

export default Navbar