import React from "react";
import Sociallogin from "../Sociallogin";
import Findus from "./Findus";
import Qzone from "../Qzone";

const Rightaside = () => {
  return (
    <div>
      <div>
        <Sociallogin></Sociallogin>
      </div>
      <div>
        <Findus></Findus>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default Rightaside;
