import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import "./profile.css"
function App() {
  const [value,setValue]=useState("")
  const [userName,setUserName]=useState("")
  const [data,setData]=useState("")
  const [loading,setLoading]=useState(false)
  const [mssg,setMessage]=useState("")
  function handleSubmit(){
if(value==""){
  setMessage("Please Enter a username First!")
}
setUserName(value)
setValue("")
  }
  async function getData(user){
    const res=await fetch(`https://api.github.com/users/${user}`)
    const out=await res.json()
    setData(out)
  }
  useEffect(()=>{
getData(userName)
  },[userName])
  return (
    <div>
    <div className='input-wrapper'>
    <input type='text' placeholder='Enter Username' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={handleSubmit}>Search</button>
    </div>
    {userName!==""? <Profile user={data}></Profile>:<div className='message'>{mssg}</div>}
    </div>
  )
}

export default App