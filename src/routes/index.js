import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";
import signupView from "../views/signupView";
import Profile from "../components/profile/profile";
import EditProfile from "../components/profile/editProfile";
import ProtectedRoute from "./protectedRoutes";
import ResetPasswordView from "../views/resetView/resetPasswordView";
import LogoutPage from "../views/logoutView";
import ArticleDetailView from "../views/articleDetailView";
import CreateArticleView from "../views/createArticleView";
import EditArticleView from "../views/editArticleView";

const Routes = () => (
  <div>
    <BrowserRouter className="container">
      <Route path="/" exact component={HomeView} />
      <Route path="/login" exact component={LoginView} />
      <Route exact path="/reset_password" component={ResetPasswordView} />
      <Route exact path="/reset_password/:token" component={ResetPasswordView} />
      <ProtectedRoute path="/logout" exact component={LogoutPage} />
      <Route path="/signup" exact component={signupView} />
      <ProtectedRoute path="/profile" exact component={Profile} />
      <ProtectedRoute path="/editprofile" exact component={EditProfile} />
      <Route path="/article/:slug" exact component={ArticleDetailView} />
      <ProtectedRoute path="/create_article" exact strict component={CreateArticleView} />
      <ProtectedRoute path="/editor/:slug" exact strict component={EditArticleView} />
    </BrowserRouter>
  </div>
);
export default Routes;
