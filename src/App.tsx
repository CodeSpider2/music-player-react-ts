import { router } from "./components/Routes/router";
import { RouterProvider } from "react-router-dom";
import AudioContextProvider from "./context/musicContext";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <AudioContextProvider>
        <RouterProvider router={router} />
      </AudioContextProvider>
    </>
  );
};

export default App;
