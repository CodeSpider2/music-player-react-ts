import React, { useEffect } from "react";

interface PlayerProps {}

const Player: React.FC<PlayerProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="player w-[100%] h-[7rem] bg-gray-900 overflow-hidden p-0 m-0 bottom-0"></div>
    </div>
  );
};

export default Player;
