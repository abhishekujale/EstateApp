import "./profileUpdatePage.scss";
import { Navigate, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const navigate = useNavigate();
  const {updateUser, currentUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleSubmit =async  (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      console.log(currentUser._id)
      const res = await apiRequest.put(`/users/${currentUser._id}`,
        {
          username,
          email,
          password,
          avatar
        });
      updateUser(res.data) 
     navigate("/")
    }
    catch (err) {
    if (err.response && err.response.data) {
      setError(err.response.data.message);
    } else {
      setError('An unexpected error occurred.');
      console.log(err.data)
    }
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
            {
              error && <p style={{ color: 'red' }}>{error}</p>
            }
        </form>
      </div>
      <div className="sideContainer">
          <img src={avatar || "/noavatar.jpeg"} alt="" className="avatar" />
           <UploadWidget uwConfig={{
          cloudName:"diuccng9g",
          uploadPreset: "estate",
          maxFiles: 1,
          multiple: false,
          maxFileSize: 1024 * 1024 * 2,
          folder:"avatars"
        }}
          setAvatar={setAvatar}
        />
        </div>
       
    </div>
  );
}

export default ProfileUpdatePage;
