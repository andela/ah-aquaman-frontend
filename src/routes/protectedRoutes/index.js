import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

export const Authenticate = (token) => {
  try {
    const res = decode(token);
    if (res.exp > Date.now() / 1000) {
      return { res };
    }
    return false;
  } catch (error) {
    return false;
  }
};

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = Authenticate(localStorage.getItem("token"));
  return (
    <Route
      {...props}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)
      }
    />
  );
};

export default ProtectedRoute;
