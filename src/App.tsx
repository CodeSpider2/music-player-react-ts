import { router } from "./components/Routes/router";
import { RouterProvider } from "react-router-dom";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
