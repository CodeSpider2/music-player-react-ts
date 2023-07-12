import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "../auth/auth";
import DashBoard from "../../Dashboard/Dash";
import Join from "../Join";
import Custom404Page from "../custom404";
import Custom503Page from "../ComingSoon";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Join />} />,
    <Route path="/auth" element={<Auth />} />,
    <Route path="/dashboard" element={<DashBoard />} />,
    <Route path="/comingSoon" element={<Custom503Page />} />,
    <Route path="/*" element={<Custom404Page />} />,
  ])
);
