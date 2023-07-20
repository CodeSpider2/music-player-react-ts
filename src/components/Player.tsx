import { useContext, useRef, useEffect, useState } from "react";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
} from "react-icons/io5";
import { MusicContext } from "../context/musicContext";
import axios from "axios";

interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  const musicContext = useContext(MusicContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      if (musicContext?.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicContext?.isPlaying]);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const currentMusicName = localStorage.getItem("musicName");
        const currentMusic = currentMusicName?.replace(".mp3", "");
        const response = await axios.get(
          `http://localhost:4500/music/${currentMusic}`
        );
        if (response.data && audioRef.current) {
          audioRef.current.src = response.data;
          setLoading(false); // Set loading state to false when song is fetched
        }
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };

    fetchSong();
  }, []);

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

  return (
    <div>
      <div className="player w-[100%] h-[4rem] flex overflow-hidden p-0 m-0 bottom-0 justify-center fixed">
        {/* Audio Player */}
        {loading ? (
          <div>Loading...</div> // Render loading component while song is being fetched
        ) : (
          musicContext &&
          musicContext.currentPlaying && <audio ref={audioRef} controls />
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
