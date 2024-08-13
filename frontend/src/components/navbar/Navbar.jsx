import { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-16 px-4 md:px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl">
        <img src="/logo.png" alt="Logo" className="w-8" />
        <span className="hidden md:inline">Logo</span>
      </div>

      {/* Desktop Menu */}
      <div className="flex items-center gap-4">
        <a href="#" className="p-2 hover:underline">Link</a>
        <div className="flex items-center gap-2 font-bold">
          <VscAccount className="text-2xl" />
          <span className="hidden sm:inline">Username</span>
          <div className="relative">
            <button className="px-3 py-2 bg-[#fece51] text-white border-none rounded cursor-pointer">
              Profile
            </button>
            <div className="absolute top-[-8px] right-[-8px] bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              3
            </div>
          </div>
        </div>
        <button className="bg-[#fece51] px-4 py-2 text-white rounded">Register</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <img
          src="/menu.png"
          alt="Menu"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bg-black text-white h-full w-2/3 md:w-0 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <a href="#" className="block mb-4 text-2xl">Home</a>
          <a href="#" className="block mb-4 text-2xl">About</a>
          <a href="#" className="block mb-4 text-2xl">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
