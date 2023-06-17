import React, { useContext } from "react";

interface BoxProps {
  // name: string;
  // cover: string;
  // path: string;
}
import { MusicContext } from "../context/musicContext";

const Box: React.FC<BoxProps> = () => {
  const audioContext = useContext(MusicContext);
  console.log(audioContext?.audioFiles[0].cover);

  return (
    <>
      <div
        className={
          "box w-[14rem] h-[16rem] bg-slate-300 box-background  rounded-md cursor-pointer hover:opacity-30"
        }
      ></div>
    </>
  );
};

export default Box;
