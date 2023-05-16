import React from "react";

const NavBar: React.FC = ({}) => {
  return (
    <>
      <nav className=" top-0 h-[4.5rem] flex justify-between bg-black">
        <div className="title pt-4 text-left ml-4 text-green-500 font-bold text-lg">
          STREAM
        </div>
        <div className="upgrade pt-4">
          <button className="w-[5rem] h-[2rem] mr-8 bg-orange-400 text-white border-yellow-400 rounded-2xl border-none">
            Upgrade
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
