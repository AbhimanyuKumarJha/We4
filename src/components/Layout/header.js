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
      <div
        className="w-full h-20 bg-black top-0 flex p-5 justify-between items-center text-center fixed z-9"
        id="layout-header"
      >
        <div>
          <img src="/Logo.png" alt="Logo" width="180px" />
        </div>
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
