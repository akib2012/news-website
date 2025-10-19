import React from "react";
import { Link, NavLink } from "react-router";
import users from "../assets/user.png";
import { useContext } from "react";
import { Authcontext } from "../authcontextprovider/Authcontext";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);

  const handlelogout = () => {
    logout()
    .then((result) => {
      console.log(result.user)
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="max-w-10/12 grid grid-cols-10 mx-auto py-5">
      <div className="col-span-2"></div>
      <div className="col-span-6 flex justify-center">
        <nav className="space-x-3.5 text-accent font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Career">Career</NavLink>
        </nav>
      </div>
      <div className="col-span-2 flex justify-end gap-2 ">
        <img src={users} alt="" />

        {user ? (
          <button
            onClick={handlelogout}
            className="bg-primary text-white font-semibold px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login">
            {" "}
            <button className="bg-primary text-white font-semibold px-4 py-2 rounded-xl">
              Login
            </button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
