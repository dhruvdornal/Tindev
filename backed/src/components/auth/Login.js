import {  useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//import Axios  from 'axios'
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [loginStatus, setLoginStatus] = useState([])
    const login = () => {
        /* MONGO DB code */
        fetch("http://localhost:5000/login",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,password
        }),
      }).then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if(data.status === "ok"){
            setUsername(data.username)
            setLoginStatus(`Logged in as ${data.username}`);
            navigate("/");
          }else{
            setLoginStatus("NO SHIT")
          }
        })

      }
  return (
    <div className='logn'>
      <h1>Login</h1>
      <label>Username</label>
      <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
      <br></br>
      <label>Password</label>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br>
      <p style={{color:"red"}}>{loginStatus}</p>
      <button onClick={login}>Login</button>
     </div>
    
  )
}

export default Login