import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Sociallogin = () => {
  return (
    <div>
      <div>
        <h3 className="font-bold">Login with</h3>
      </div>
      <div>
        <button className="btn w-full my-2.5 btn-outline"><FcGoogle size={24}/>Login with google </button> <br />
        <button className="btn w-full my-2.5 btn-outline"><FaGithub size={24}/>Login with github</button>
      </div>
    </div>
  );
};

export default Sociallogin;
