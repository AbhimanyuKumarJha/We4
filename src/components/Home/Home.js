// import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="w-full h-full bg-gray-950 text-white p-0 mt-20 overflow-scroll  fixed ">
        <div className="w-full h-[150vh] flex justify-center items-center relative">
          <p className="Hero-heading text-[7vw] text-white">Placement Assist</p>
          <div className="absolute top-[120vh] right-1/3 translate-x-1/2">
            <p className="text-[1vw]">Want to clear Interview for your exam</p>
            <p className="text-[1vw]">But couldn't</p>
          </div>
          <div className="absolute top-[calc(150vh-300px)] left-0 ">
            <img src="RobotTalk.png" alt="Talk" width="500px" />
          </div>
        </div>
        <div className="SHADOWS">
          <div className="absolute top-[120vh] right-14 bg-[#4E00B0] blur-[120px] w-10 h-10">
            fdaf
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
