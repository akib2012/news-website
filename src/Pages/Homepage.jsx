import React from "react";
import Leftaside from "../Components/homelayout/Leftaside";
import { Navigate } from "react-router";

const Homepage = () => {
  return (
    <div>
     
      <div>
        
        <Navigate to='/categorisnews/0'></Navigate>
       
      </div>
    </div>
  );
};

export default Homepage;
