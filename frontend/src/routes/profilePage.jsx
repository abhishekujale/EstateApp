import Chat from "../components/chat/Chat";
import List from "../components/list/List";

function ProfilePage() {
  return (
    <div className="profilePage inline h-screen sm:flex ">
      <div className="details flex-3 overflow-auto pb-12 ">
        <div className="wrapper pr-12 flex flex-col gap-12">
          <div className="title flex items-center justify-between">
            <h1 className="font-light text-2xl">User Information</h1>
            <button className="bg-yellow-400 py-3 px-6 cursor-pointer border-none">Update Profile</button>
          </div>
          <div className="info flex flex-col gap-5">
            <span className="flex items-center gap-5">
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title flex items-center justify-between">
            <h1 className="font-light text-2xl">My List</h1>
            <button className="bg-yellow-400 py-3 px-6 cursor-pointer border-none">Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1 className="font-light text-2xl">Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer flex-2 bg-[#fcf5f3] md:flex-none md:h-auto">
        <div className="wrapper px-5 h-full">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
