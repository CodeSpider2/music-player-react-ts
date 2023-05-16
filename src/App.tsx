import React from "react";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./index.css";

const App: React.FC = ({}) => {
  return (
    <main>
      <NavBar />
      <SideBar />
    </main>
  );
};

export default App;
