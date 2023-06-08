import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "../auth/auth";
import DashBoard from "../../Dashboard/Dash";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Auth />} />,
    <Route path="/dashboard" element={<DashBoard />} />,
  ])
);
