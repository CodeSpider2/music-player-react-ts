interface BoxProps {
  music: string;
  // name: string;
  // cover: string;
  // path: string;
}
// import { MusicContext } from "../context/musicContext";
const Box: React.FC<BoxProps> = ({ music }) => {
  // const audioContext = useContext(MusicContext);
  // console.log(audioContext?.audioFiles[0].cover);
  const selectMusic = (musicName: string) => {
    console.log(musicName);
    localStorage.setItem("musicName", musicName);
  };
  return (
    <div
      className="flex flex-col bg-slate-300"
      onClick={() => selectMusic(music)}
    >
      <div
        className={
          "box w-[14rem] h-[14rem] bg-slate-300 box-background  rounded-md cursor-pointer hover:opacity-30"
        }
      ></div>
      <div className="flex justify-center">{music}</div>
    </div>
  );
};

export default Box;
