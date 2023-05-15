import React from "react";
import "./navbar.scss";

const NavBar: React.FC = ({}) => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark top-nav flex justify-between">
        <div className="title text-left ml-4 text-green-500 font-bold text-lg">
          STREAM
        </div>
        <div className="upgrade">
          <button className="w-[5rem] h-[2rem] mr-8 bg-orange-400 text-white border-yellow-400 rounded-2xl border-none">
            Upgrade
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
