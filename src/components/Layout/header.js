import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-25 bg-black top-0 absolute flex p-5 justify-between items-center text-center">
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
          <div>
            <Link to="/Dashboard">Login </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
