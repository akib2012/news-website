import React from "react";
import Marquee from "react-fast-marquee";
const Letestnews = () => {
  return (
    <div className="max-w-10/12 mx-auto my-3.5">
      <div className="flex items-center gap-5 bg-base-200 py-3">
        <p className="bg-secondary font-semibold p-2.5 ml-2 text-white">
          Latest
        </p>
        <Marquee pauseOnHover={true}>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Letestnews;
