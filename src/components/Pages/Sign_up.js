import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sign_up() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/Sign_up", {
        username,
        email,
        password,
      });
      // Registration successful, handle the response as needed
      console.log(response.data);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div className="box_container">
      <div className="box1" id="box1">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <h1>Registration form</h1>
            <div className="inputbox">
            Username<input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                required
              />
           
            </div>
            <div className="inputbox">
            Email ID<input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
              
            </div>
            <div className="inputbox">
            Password<input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
             
            </div>

            <input type="submit" value="SignUp" />
            <NavLink to="/signin" className="login-link">Already have an account? Login</NavLink>

            {error && (
              <div style={{ color: "red", marginTop: "10px" }}>
                Username or Email already exists 
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
