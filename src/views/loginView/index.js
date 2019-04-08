import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Login from "../../components/loginForm";
import loginAction from "../../actions/loginAction";
import Authenticate from "../../routes/protectedRoutes";
import CircularProgressLoader from "../../commons/progressLoader";

const jwt = require("jsonwebtoken");

export class LoginView extends Component {
  state = {
    loader: {
      success: false,
      loading: false,
    },
    isProcessing: false,
  };

  componentDidMount() {
    if (Authenticate(localStorage.getItem("token"))) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      localStorage.setItem("token", nextProps.token);
      
      const decoded = jwt.decode(nextProps.token);
      if (decoded) {
        const username = decoded.username;
        localStorage.setItem("username", username);
        this.props.history.push("/");
        toast.success("You have successfully signed in", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      }
    }
    this.setState({ loader: { loading: false } });
    this.setState({ isProcessing: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginAction } = this.props;
    const userData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    loginAction(userData);
    this.setState({ loader: { loading: true } });
    this.setState({ isProcessing: true });
  };

  onChangeRegister = () => {
    this.props.history.push("/signup");
  }

  onChangeResetPassword = () => {
    this.props.history.push("/reset-password");
  }

  render() {
    const { errors, history } = this.props;
    const loader = this.state.loader;
    const buttonDisable = this.state.isProcessing;
    return (
      <div className="login background-image">
        <CircularProgressLoader {...loader} />
        <Login
          onSubmit={this.handleSubmit}
          isProcessing={buttonDisable}
          errors={errors}
          history={history}
          onRegister={this.onChangeRegister}
          onPassword={this.onChangeResetPassword}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.loginReducer.token,
  errors: state.loginReducer.errors,
  isSuccessful: state.loginReducer.isSuccessful,
});

LoginView.propTypes = {
  token: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.any,
    password: PropTypes.any,
    error: PropTypes.any,
  }),
};

LoginView.defaultProps = {
  token: "",
  errors: {},
};

export default connect(mapStateToProps, { loginAction })(LoginView);
