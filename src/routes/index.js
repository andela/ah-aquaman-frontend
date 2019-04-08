import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";
import signupView from "../views/signupView";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/signup" component={signupView} />
    </BrowserRouter>
  
  </div>
);

export default Routes;  
