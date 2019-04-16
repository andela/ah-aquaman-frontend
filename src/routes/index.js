import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";
import signupView from "../views/signupView";
import Profile from "../components/profile/profile";
import EditProfile from "../components/profile/editProfile";

const Routes = () => (
  <div>
    <BrowserRouter className="container">
      <Route path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/signup" component={signupView} />
      <Route path="/profile" component={Profile} />
      <Route path="/editprofile" component={EditProfile} />
    </BrowserRouter>
  </div>
);
export default Routes;
