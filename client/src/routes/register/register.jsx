import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {

const [error,setError]=useState('')
  const navigate = useNavigate();
 
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const avatar = formData.get("avatar");
  
  try {
    const response = await fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        avatar
      }),
    });
    
    // Check if the response is ok (status is in the range 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }
    
    // Parse the response data as JSON
    const data = await response.json();
    console.log(data);
    navigate("/login");
  } catch (error) {
    // Log and display the error message
    setError(error.message);
  }
}


  return (
    <div className="register">
      <div className="formContainer">
          <div className="SubmitContainer">

        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
            <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <input name="avatar" type="password" placeholder="avatar" />
          <button >Register</button>
            <Link to="/login">Already  have an account !</Link>
            {error && <span>{error}</span> }
          </form>
          </div>
          
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
