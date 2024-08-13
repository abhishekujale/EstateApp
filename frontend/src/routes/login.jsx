import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login flex h-screen">
      <div className="formContainer flex-3 h-full flex items-center justify-center">
        <form className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-5 border border-gray-400 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-5 border border-gray-400 rounded-md"
          />
          <button className="p-5 rounded-md border-none bg-teal-500 text-white font-bold cursor-pointer hover:bg-teal-600 disabled:bg-teal-300 disabled:cursor-not-allowed">
            Login
          </button>
          <Link
            to="/register"
            className="text-sm text-gray-600 border-b border-gray-400"
          >
            {"Don't"} you have an account?
          </Link>
        </form>
      </div>
      <div className="imgContainer flex-2 bg-[#fcf5f3] flex items-center justify-center">
        <img src="/bg.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Login;
