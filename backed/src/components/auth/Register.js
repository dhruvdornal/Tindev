import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//import Axios from 'axios'
const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [skills, setskills] = useState([])
    const [desc, setdesc] = useState([])
    const [signupStatus, setSignupStatus] = useState([])
   
    
    const rego = async () =>{
      /* MONGO DB code */

      fetch("http://localhost:5000/register",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,password,skills,desc
        }),
      }).then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if(data.status === "ok"){
            setSignupStatus("hogaya register");
            navigate("/login")
          }else{
            setSignupStatus("NO SHIT")
          }
        })

       

      }

  return (
    <div className='reg'>
    <h1>Register</h1>
    <label>Username</label>
    <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
    <br/>
    <br/>
    <br/>
    <label>Skills</label>
    <input type="text" onChange={(e)=>{setskills(e.target.value)}}/>
    <br/>
    <br/>
    <br/>
    <label>Description</label>
    <input type="text" onChange={(e)=>{setdesc(e.target.value)}}/>
    <br/>
    <br/>
    <br/>
    <label>Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <br></br>
    <p style={{color:"red"}}>{signupStatus}</p>
    <button onClick={rego}>Register</button>
   </div>
  
  )
}

export default Signup