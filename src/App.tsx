import React from "react";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./index.css";
import Widget from "./components/Widgets";
import Player from "./components/Player";

const App: React.FC = ({}) => {
  return (
    <main className=" overflow-hidden">
      <NavBar />
      <div className="content h-[100vh] flex">
        <div className="side h-[100vh]">
          <SideBar />
        </div>
        <div className="widget overflow-scroll overflow-x-hidden">
          <Widget />
          <div className="player">
            <Player />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
