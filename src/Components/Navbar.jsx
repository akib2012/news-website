import React from "react";
import { NavLink } from "react-router";
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className="max-w-10/12 grid grid-cols-10 mx-auto my-5">
      <div className="col-span-2"></div>
      <div className="col-span-6 flex justify-center">
        <nav className="space-x-3.5 text-accent font-semibold">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Career">Career</NavLink>
        </nav>
      </div>
      <div className="col-span-2 flex justify-end gap-2 ">
        <img src={user} alt="" />
        <button className="bg-primary text-white font-semibold px-4 py-2 rounded-xl">
            Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
