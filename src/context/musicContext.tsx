import { createContext, useState } from "react";
import {
  AudioFile,
  AudioContextType,
  MusicProviderprops,
} from "../Types/types";

export const MusicContext = createContext<AudioContextType | undefined>(
  undefined
);

const MusicContextProvider: React.FC<MusicProviderprops> = ({ children }) => {
  const [audioFiles] = useState<AudioFile[]>([
    {
      name: "Dave X Cench Sprinter",
      path: "../../assets/sprinter.mp3",
      cover: "../../assets/sprinter-cover.jpg",
    },
  ]);
  const [currentPlaying, setCurrentPlaying] = useState<AudioFile | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAudio = (audio: AudioFile) => {
    if (currentPlaying && currentPlaying.path === audio.path) {
      setIsPlaying(false);
    } else {
      setCurrentPlaying(audio);
      setIsPlaying(true);
    }
  };

  const musicContextValues: AudioContextType = {
    audioFiles,
    currentPlaying,
    isPlaying,
    playAudio,
  };

  return (
    <MusicContext.Provider value={musicContextValues}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
