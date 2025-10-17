import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";


const Findus = () => {
  return <div className="mt-9">
    <h3 className="font-bold">Find us</h3>
   <div className="flex flex-col">
     <Link className="btn w-full my-2.5 btn-outline justify-start" to='#'><FaFacebook size={24} /> Facebook</Link>
    <Link className="btn w-full my-2.5 btn-outline justify-start" to='#'><FaTwitter size={24} />
 twiter</Link>
    <Link className="btn w-full my-2.5 btn-outline justify-start" to='#'><FaInstagramSquare size={24} /> Instragram</Link>
   </div>
  </div>;
};

export default Findus;
