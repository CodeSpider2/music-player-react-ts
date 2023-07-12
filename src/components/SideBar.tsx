type SideBarProps = {};
import home from "../assets/home-icon.png";
import recents from "../assets/recently-played.png";
import collections from "../assets/my-collections.png";
import playlists from "../assets/my-playlist.png";
import createPlaylist from "../assets/create-playlist.png";
import music_logo from "../assets/music-logo-icon.png";
import { NavLink } from "react-router-dom";

const SideBar: React.FC<SideBarProps> = ({}) => {
  //   useEffect(() => {}, []);

  return (
    <>
      <div className="side h-[100vh] w-[10rem] sm:w-[15rem] bg-gray-900 left-0">
        <div className="flex flex-col  items-center pl-2 text-white flex-wraptext pt-10 gap-6 h-[80%] w-[80%]">
          <NavLink to="/dashboard">
            <div className="home hover:bg-zinc-400 gap-3 border w-[12rem] justify-center items-center flex p-2 rounded">
              <img src={home} className="w-[25px]" alt="home" /> Home
            </div>
          </NavLink>
          <NavLink to="/comingSoon">
            <div className="recent gap-3 hover:bg-zinc-400  border w-[12rem] justify-center items-center rounded flex p-2">
              <img src={recents} className="w-[25px]" alt="home" />
              Recently played
            </div>
          </NavLink>
          <NavLink to="/comingSoon">
            <div className="collections gap-3 hover:bg-zinc-400 border w-[12rem] justify-center items-center rounded p-2 flex">
              <img src={collections} className="w-[25px]" alt="home" />{" "}
              Collections
            </div>
          </NavLink>
          <NavLink to="/comingSoon">
            <div className="playlists gap-3 hover:bg-zinc-400 border w-[12rem] justify-center items-center rounded p-2 flex">
              <img src={playlists} className="w-[25px]" alt="home" /> Playlists
            </div>
          </NavLink>
          <NavLink to="/comingSoon">
            <div className="create gap-3 hover:bg-zinc-400 border w-[12rem] justify-center items-center rounded flex p-2">
              <img src={createPlaylist} className="w-[25px]" alt="home" />{" "}
              Create playlist
            </div>
          </NavLink>
          <div className="music-logo flex justify-center">
            <img src={music_logo} className="w-[100px]" alt="music-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
