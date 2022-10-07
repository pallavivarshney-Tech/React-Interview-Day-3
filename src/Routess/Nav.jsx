import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='main2'>
        <ul>
            <li>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>ABout</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav