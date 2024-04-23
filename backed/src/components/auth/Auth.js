import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import $ from 'jquery'

//import Axios from 'axios'
const Auth = () => {
    // eslint-disable-next-line
    const navigate = useNavigate();
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [skills, setskills] = useState([])
    const [desc, setdesc] = useState([])
    const [email, setEmail] = useState([])
    const [github, setGithub] = useState([])
    // eslint-disable-next-line
    const [signupStatus, setSignupStatus] = useState([])
    // eslint-disable-next-line
    const [loginStatus, setLoginStatus] = useState([])

    /* js part of auth */
    
    const rego = async () =>{
      /* MONGO DB code */
      if(!username || !skills || !desc || !password){
        toast.error("Please input all fields;",{
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      if(password.length < 8){
        toast.error("Password must be at least 8 characters long",{
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      fetch("http://localhost:5000/register",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,password,skills,desc,email,github
        }),
      }).then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          if(data.status === "ok"){
            //setSignupStatus("hogaya register");
            toast.success("Successfully Registered :)",{
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }else if(data.message === "Oops, username taken"){
            //setSignupStatus("Oops, USERNAME IS TAKEN")
            toast.error("Oops, USERNAME IS TAKEN :(",{
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }else{
            setSignupStatus("NO SHIT")
         }
        })
      }
 
      /* LOGIN CODE */
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
            console.log("Setting user object as ",data.user)
            setUsername(data.username)
            localStorage.setItem('user', JSON.stringify(data.user));
            // setUsername(data.user.username);
            //setLoginStatus(`Logged in as ${data.username}`);
            toast.success("Successfully Logged in :)",{
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })    
            navigate("/");
          }else{
            //setLoginStatus("NO SHIT")
            toast.error("Invalid Credentials :(",{
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })   
          }
        })

      }

return(
<>
<div className="section" style={{background:"linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%)"}}>
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                        <label htmlFor="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input type="email" name="logusername" className="form-style" placeholder="Your Username" id="logemail" autoComplete="off" onChange={(e)=>{setUsername(e.target.value)}}/>
                        <i className="input-icon uil uil-at"></i>
                      </div>  
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
<br></br>
                                            <button className="submit" value="Submit" type="submit" onClick={login}>Submit</button>
                                            <p style={{fontSize:"20px",color:"red"}}>{loginStatus}</p>
                                            
                        </div>
                      </div>
                    </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-7 pb-3">Sign Up</h4>
                      
                      <div className="form-group">
                      <input type="text" name="logname" className="form-style" required="true" placeholder="Username" id="logname" autoComplete="off" onChange={(e)=>{setUsername(e.target.value)}}></input>
                      <i className="input-icon uil uil-user"></i> 
                      </div>  
                      <div className="form-group mt-2">
                        <input type="email" name="logskills" className="form-style" required="true" placeholder="Skills" id="logskills" autoComplete="off" onChange={(e)=>{setskills(e.target.value)}}/>
                        <i className="input-icon uil uil-at"></i>
                      </div>  
                      <div className="form-group mt-2">
                        <input type="email" name="logdesc" className="form-style" required="true" placeholder="Description" id="logdesc" autoComplete="off" onChange={(e)=>{setdesc(e.target.value)}}/>
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="email" name="logdesc" className="form-style" required="true" placeholder="Email Address" id="logdesc" autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="email" name="logdesc" className="form-style" required="true" placeholder="Your Github Link" id="logdesc" autoComplete="off" onChange={(e)=>{setGithub(e.target.value)}}/>
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" name="logpasswd" className="form-style" required="true" placeholder="Your Password" id="logpasswd" autoComplete="off" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                                            <br></br>
                                            
                          <button className="submit" value="Submit" type="submit" onClick={rego}>Submit</button>
                          <p style={{fontSize:"20px",color:"red"}}>{signupStatus}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</>
)
}
export default Auth