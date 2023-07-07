import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "../auth/auth";
import DashBoard from "../../Dashboard/Dash";
import Join from "../Join";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Join />} />,
    <Route path="/auth" element={<Auth />} />,
    <Route path="/dashboard" element={<DashBoard />} />,
  ])
);
