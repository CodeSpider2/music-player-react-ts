import React, { useEffect } from "react";
import {
  IoPlayBackSharp,
  // IoPlayForwardSharp,
  // IoPlaySkipBackSharp,
  // IoPlaySkipForwardSharp,
  // IoPlaySharp,
  // IoPauseSharp,
} from "react-icons/io5";
interface PlayerProps {}

const Player: React.FC<PlayerProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="player w-[100%] h-[7rem] bg-gray-900 fixed overflow-hidden p-0 m-0 bottom-0"></div>
      <div className="controls flex justify-content-center items-center">
        <button className=" bg-white">
          <IoPlayBackSharp />
        </button>
      </div>
    </div>
  );
};

export default Player;
