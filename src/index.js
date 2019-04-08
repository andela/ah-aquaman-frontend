import React from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";

export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") || document.createElement("div"),
);
