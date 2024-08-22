import "./profileUpdatePage.scss";
import { Navigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function ProfileUpdatePage() {
  const {updateUser, currentUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = apiRequest.put(`/users/${currentUser.id}`, { username, email, password });
                 
    }
    catch (err)
    {
      setError(err.response.data.message);
    }
  }
  return (
     !currentUser ?<Navigate to="/login"/>
      :
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
                type="text"
                defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
                type="email"
                defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={ "/noavatar.jpeg"} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
