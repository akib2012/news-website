import React from "react";
import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
import classimg from "../assets/class.png";

const Qzone = () => {
  return (
    <div className="mt-9 bg-base-200 p-6 rounded-md">
      <h3 className="font-bold mb-5">Q-Zone</h3>

      <div className="felx justify-center items-center">
        <div>
          <img src={swimming} alt="" />
          <img src={classimg} alt="" />
          <img src={playground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
