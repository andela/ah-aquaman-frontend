import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "../views/homeView";
import LoginView from "../views/loginView";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
    </BrowserRouter>
  
  </div>
);

export default Routes;  
