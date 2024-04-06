import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Header = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginVisibility = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <>
      <div className="w-full h-25 bg-black top-0 flex p-5 justify-between items-center text-center fixed z-9">
        <div className="w-10 h-10 text-white">LOGO</div>
        <div className="w-fit h-full flex text-white gap-6 px-3">
          <div>
            <Link to="/">HOME </Link>
          </div>
          <div>
            <Link to="/Resume"> Resume</Link>
          </div>
          <div>
            <Link to="/Interview">Interview </Link>
          </div>
          <div>
            <Link to="/Complete-Interview">Preplacement </Link>
          </div>
          <button onClick={toggleLoginVisibility}>
            {/* <Link to="/Dashboard">Login </Link> */}
            Login
          </button>
        </div>
      </div>
      <Dashboard visibity={loginVisible} />
    </>
  );
};

export default Header;
