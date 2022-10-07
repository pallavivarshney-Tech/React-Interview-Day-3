import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
const Users = () => {
    const {name,age}=useParams();
    const location=useLocation();
  return (
    <div>
        <h1>Users page {name}{age}</h1>
        <p>my current location is {location.pathname}</p>
    </div>
  )
}

export default Users