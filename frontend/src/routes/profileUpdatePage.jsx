
function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage flex h-screen">
      <div className="formContainer flex-3 flex items-center justify-center">
        <form className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Update Profile</h1>
          <div className="item flex flex-col gap-1">
            <label htmlFor="username" className="text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="p-5 border border-gray-300 rounded-md"
            />
          </div>
          <div className="item flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="p-5 border border-gray-300 rounded-md"
            />
          </div>
          <div className="item flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-5 border border-gray-300 rounded-md"
            />
          </div>
          <button className="py-5 px-6 bg-teal-500 text-white font-bold rounded-md cursor-pointer">Update</button>
        </form>
      </div>
      <div className="sideContainer flex-2 bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center">
        <img src="" alt="" className="avatar w-1/2 object-cover" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
