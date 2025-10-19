import React, { useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../authcontextprovider/Authcontext";

const Login = () => {

  const {loginuser} = useContext(Authcontext);

  const handlelogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const  password = e.target.password.value;
   
    loginuser(email, password)
    .then((result) => console.log(result.user))
    .catch(error => console.log(error));
    


  }
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login your account
        </h2>

        <form onSubmit={handlelogin}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t Have An Account?{" "}
          <Link to='/auth/regester' className="text-red-500 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
