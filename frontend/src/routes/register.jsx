import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register flex h-screen">
      <div className="formContainer flex-3 flex items-center justify-center">
        <form className="flex flex-col gap-5 w-full max-w-md">
          <h1 className="text-2xl font-semibold">Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-5 border border-gray-300 rounded-md"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="p-5 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-5 border border-gray-300 rounded-md"
          />
          <button className="py-5 px-6 bg-teal-500 text-white font-bold rounded-md cursor-pointer">Register</button>
          <Link to="/login" className="text-sm text-gray-500 border-b border-gray-300">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer flex-2 bg-[#fcf5f3] flex items-center justify-center">
        <img src="/bg.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Register;
