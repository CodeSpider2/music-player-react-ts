interface BoxProps {
  music: {};
  // name: string;
  cover: string;
  // path: string;
}
// import { MusicContext } from "../context/musicContext";
const Box: React.FC<BoxProps> = ({ music, cover }) => {
  console.log(music);

  // const selectMusic = (musicName: string) => {
  // console.log(musicName);
  // localStorage.setItem("musicName", musicName);
  // };
  return (
    <div
      className="flex flex-col bg-slate-300"
      // onClick={() => selectMusic(music)}
    >
      <div
        className={
          "box w-[14rem] h-[14rem] bg-slate-300 box-background  rounded-md cursor-pointer hover:opacity-30"
        }
      >
        <img src={cover} className="w-[300px] h-[300px]" alt="" />
      </div>
      <div className="flex justify-center">{}</div>
    </div>
  );
};

export default Box;
