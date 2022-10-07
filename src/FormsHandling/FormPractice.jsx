import React, { useState } from 'react'
import UseState from '../Components/UseState'

const FormPractice = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [allEntry,setAllEntry]=useState([])
    
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password}
        setAllEntry([...allEntry,newEntry])
       
    }
  return (
    <div>
        <form action='' onSubmit={submitForm}>
            <div>
                <label htmlFor='E-mail'>E-Mail</label>
                <input type="text" name='email' id='e-mail' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Password'>Password</label>
                <input type="Password" name='password' id='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button type="submit">LogIn</button>
        </form>
        <div className='main'>
            {
                allEntry.map((currElement)=>{
                    return(
                        <div className='container'>
                        <p>{currElement.email}</p>
                        <p>{currElement.password}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
}

export default FormPractice