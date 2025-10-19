import React, { useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../authcontextprovider/Authcontext";

const Regester = () => {
  const { regesterwithemailpassword } = useContext(Authcontext);

  const hadnleregester = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    regesterwithemailpassword(email, password)
    .then((result) => {
      console.log(result.user)
      // e.target.reset()
    })
    .catch((error) => console.log(error))
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create your account
        </h2>

        <form onSubmit={hadnleregester}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photo"
              name="photo"
              placeholder="Enter your photo URL"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            href="#"
            className="text-red-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regester;
