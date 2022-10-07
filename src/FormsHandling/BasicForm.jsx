import React, { useState } from 'react'

const BasicForm = () => {
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
                <label htmlFor='Email'>E-Mail:</label>
                <input type="text" name="email" id="email" autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Password'>Password:</label>
                <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button type="submit">login</button>
        </form>
        <div>
            {
                allEntry.map((currElement)=>{
                    return(
                        <div className='main1'>
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

export default BasicForm