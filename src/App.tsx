import React from "react";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./index.css";
import Widget from "./components/Widgets";

const App: React.FC = ({}) => {
  return (
    <main>
      <NavBar />
      <div className="content flex">
        <div className="side h-[100vh]">
          <SideBar />
        </div>
        <div className="widget">
          <Widget />
        </div>
      </div>
    </main>
  );
};

export default App;
