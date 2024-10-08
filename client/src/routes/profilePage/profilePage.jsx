import { Navigate, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const navigate = useNavigate();
  const {updateUser, currentUser} = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const response = await apiRequest.post("/auth/logout"); 
      if (response) {
    updateUser(null)
        navigate("/");
      }

    }
    catch (err)
    {
           console.log(err)
    }
  }
  return (
    !currentUser ?<Navigate to="/login"/>
      :
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
              <button onClick={() => {
                navigate("/profile/update")
            }}>  Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar|| "/noavatar.jpeg"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>
              Log Out
            </button>
          </div>
          <div className="title">
              <h1>My List</h1>
              <Link to="/add"> 
                <button>Create New Post</button>
                </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
