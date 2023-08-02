
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import "./Sign_in.css";
const Sign_in = () => {
  const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
  const [dataInput, setDataInput]=useState('');
  const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
  return (
    <>
    <div className="box_container">
        <div className="box2" id="box2">
          <div className="box">
            <form action="" onSubmit={submitThis}>
              <h1>Login form</h1>
              <div className="inputbox">
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  id="email"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                  required
                 
                />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                 
                 id="passw"
                 value={passw} onChange={(e)=>setPassw(e.target.value)}
                 required
                />
                <label>Password</label>
              </div>
              <h4 className='noacount'>  <NavLink to="/Admin">Admin Login</NavLink></h4>
              <input type="submit" value="Login" />
              <h4 className='noacount'>Don't have an account?  <NavLink to="/signup">Sign up</NavLink></h4>
              
             
            </form>
          </div>
          
        </div>
      </div>
      </>
  )
}

export default Sign_in
