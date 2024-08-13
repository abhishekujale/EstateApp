import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout flex flex-col h-screen max-w-full mx-auto px-5">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content flex-1 h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
