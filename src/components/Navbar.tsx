import React from "react";
import user_logo from "../assets/user.png";
import music_logo from "../assets/music.png";

const NavBar: React.FC = ({}) => {
  return (
    <>
      <nav className=" top-0 h-[4.5rem] flex justify-between opacity-3 bg-blue-400 border-b-2 border-white">
        <div className=" flex title pt-4 text-left ml-4 font-serif text-black font-bold text-lg">
          STREAM
        </div>

        <div className="left flex gap-4">
          <div className="upgrade pt-4">
            <button className="w-[5rem] h-[2rem] bg-orange-400 text-white border-yellow-400 rounded-2xl border-none">
              Upgrade
            </button>
          </div>
          <div className="user w-[25px] h-[25px] pt-4 mr-5">
            <img src={user_logo} alt="user-logo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
