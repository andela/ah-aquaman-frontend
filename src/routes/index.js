import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";
import signupView from "../views/signupView";
import Profile from "../components/profile/profile";
import EditProfile from "../components/profile/editProfile";
import ResetPasswordView from "../views/resetView/resetPasswordView";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={signupView} />
        <Route path="/profile" component={Profile} />
        <Route path="/editprofile" component={EditProfile} />
        <Route exact path="/reset_password" component={ResetPasswordView} />
        <Route exact path="/reset_password/:token" component={ResetPasswordView} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default Routes;
