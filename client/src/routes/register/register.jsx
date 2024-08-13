import "./register.scss";
import { Link } from "react-router-dom";

function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target)
    
    const username = formDate.get("username");
    const email = formDate.get("email");
    const password = formDate.get("password");
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
          <button >Register</button>
            <Link to="/login">Already  have an account !</Link>
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
