import React,{useState} from 'react'

const Forms = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState('')
    const [allEntry,setAllEntry]=useState([])
    const submitForm=(e)=>{
      e.pereventDefault();
      const newEntry={email:email,password:password}
      setAllEntry([...allEntry,newEntry])
    }
    
  return (
    <div>
        <form action="" onSubmit={submitForm}>
        <div>

        <label htmlFor='Email'>e-mail</label>
        <input type="text" name="email" id="e-mail" value={email} autoComplete="off" onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>

<label htmlFor='Password'>Password</label>
<input type="Password" name="password" id="password" value={password} autoComplete="off" onChange={(e)=>setPassword(e.target.value)}></input>
</div>
<button type="submit">Login</button>

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

export default Forms