import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export class LogoutPage extends Component {
  componentWillMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("article");
    localStorage.removeItem("slug");
    localStorage.removeItem("image");
    this.props.history.push("/");
    toast.success("You have successfully Logged out", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
    });
  }

  render() {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default LogoutPage;