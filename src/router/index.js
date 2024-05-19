import Login from "../pages/Login";




import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import PrivateRoute from "./privateRoutes";
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
          <Route element={<MyProfile />} path="/my-profile" />

          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<UserProfile />} path="/user-profile/:id" />
          <Route element={<AllProfiles />} path="/all-profiles" />
          <Route element={<CreateAccount />} path="/create-account" />


        </Routes>
      </Router>
    </>
  );
}

export default Navigator;
