import React, { useState } from 'react';

import "./Sign_in.css";


const Admin = () => {
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
              <h1> Admin Login form</h1>
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
              <input type="submit" value="Login" />
              </form>
              </div>
              </div>
              </div>  
    </>
  )
}

export default Admin
