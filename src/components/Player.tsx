import { useContext, useRef, useEffect } from "react";
import sprinter from "../assets/sprinter.mp3";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
} from "react-icons/io5";
import { MusicContext } from "../context/musicContext";
// import { AudioFile } from "../Types/types";

interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  const musicContext = useContext(MusicContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (musicContext?.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicContext?.isPlaying]);

  const playPauseHandler = () => {
    if (musicContext) {
      musicContext.playAudio(
        musicContext.currentPlaying || musicContext.audioFiles[0]
      );
    }
  };

  const skipForwardHandler = () => {
    // Logic to skip forward to the next track
  };

  const skipBackwardHandler = () => {
    // Logic to skip backward to the previous track
  };
  console.log(musicContext?.currentPlaying);

  return (
    <div>
      <div className="player w-[100%] h-[4rem] flex   overflow-hidden p-0 m-0 bottom-0 justify-center">
        {/* Audio Player */}
        {musicContext && musicContext.currentPlaying && (
          <audio ref={audioRef} src={sprinter} controls />
        )}
      </div>
      <div className="controls flex justify-content-center items-center">
        <div className="controls pb-5 flex justify-center my-auto mx-auto gap-10 mt-0">
          <IoPlaySkipBackSharp onClick={skipBackwardHandler} />
          <IoPlayBackSharp onClick={skipBackwardHandler} />
          <IoPlaySharp onClick={playPauseHandler} />
          <IoPlayForwardSharp onClick={skipForwardHandler} />
          <IoPlaySkipForwardSharp onClick={skipForwardHandler} />
        </div>
      </div>
    </div>
  );
};

export default Player;
