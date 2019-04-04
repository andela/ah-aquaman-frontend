import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/App.scss";
import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import Routes from "./routes/index";

const App = () => (
  <div>
    <ToastContainer />
    <Routes />
  </div>
);

export default App;
