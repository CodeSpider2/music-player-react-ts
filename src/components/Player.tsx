import React, { useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

interface PlayerProps {}

const Player: React.FC<PlayerProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="player w-[100%] h-[7rem] bg-gray-900 fixed overflow-hidden p-0 m-0 bottom-0"></div>
      <AudioPlayer />
    </div>
  );
};

export default Player;
