import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CheckOut from "../pages/CheckOut";



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import PrivateRoute from "./privateRoutes";
import CheckIn from "../pages/CheckIn";
import MyProfile from "../pages/MyProfile";
import AllProfiles from "../pages/AllProfiles";
import UserProfile from "../pages/UserProfile";
import CreateAccount from "../pages/CreateAccount";

function Navigator() {
  const login = localStorage.getItem("isAuthenticated");



  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />}></Route>
          <Route element={<MyProfile />} path="/my-profile" />

          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<AllProfiles />} path="/all-profiles" />
          <Route element={<UserProfile />} path="/user-profile" />
          <Route element={<CreateAccount />} path="/create-account" />


        </Routes>
      </Router>
    </>
  );
}

export default Navigator;
