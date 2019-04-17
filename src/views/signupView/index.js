import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Signup from "../../components/signupForm";
import signupAction from "../../actions/signupAction";
import CircularProgressLoader from "../../commons/progressLoader";

const jwt = require("jsonwebtoken");

export class SignupView extends Component {
  state = {
    loader: {
      loading: false,
    },
    isProcessing: false,
    disabled: false,
    validateInput: {
      password: false,
      username: false,
      matchPassword: false,
    },
    password1: "",
  };

  componentWillReceiveProps(nextProps) {
    const decoded = jwt.decode(nextProps.token);
    if (decoded) {
      this.props.history.push("/login");
      toast.success("Click the link sent to your email to verify.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
    }
    this.setState({ loader: { loading: false } });
    this.setState({ isProcessing: false });
  }

  validateEmail = (email) => {
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      return false;
    }
    return true;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "email" && e.target.value.length > 0) {
      this.setState({ disabled: this.validateEmail(e.target.value) }); 
    }

    if (e.target.name === "username") {
      if (e.target.value.length > 0 && e.target.value.length < 6) {
        this.setState({
          validateInput: {
            username: true,
          }, 
        });
        return true;
      }
      this.setState({
        validateInput: {
          username: false,
        }, 
      });
      return false;
    }
    if (e.target.name === "password1") {
      if (e.target.value.length > 0 && e.target.value.length < 9) {
        this.setState({ password1: e.target.value });
        this.setState({
          validateInput: {
            password: true,
          }, 
        });
        return true;
      }
      this.setState({
        validateInput: {
          password: false,
        }, 
      });
    }
    if (e.target.name === "password2" && e.target.value !== this.state.password1) {
      this.setState({ validateInput: { matchPassword: true } });
    } else {
      this.setState({ validateInput: { matchPassword: false } });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { signupAction } = this.props;

    if (event.target.elements.password1.value !== event.target.elements.password2.value) {      
      toast.error("Password mis-match!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
    } else {
      const userData = {
        username: event.target.elements.username.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password1.value,
      };
      signupAction(userData);
      this.setState({ loader: { loading: true } });
      this.setState({ isProcessing: true });
    }
  };

  render() {
    const { errors, history } = this.props;
    const loader = this.state.loader;
    return (
      <div className="login background-image">
        <CircularProgressLoader {...loader} />
        <Signup
          onSubmit={this.handleSubmit}
          onChange={this.onChange}
          errors={errors}
          history={history}
          onClick={this.onClick}
          isProcessing={this.state.isProcessing}
          disabled={this.state.disabled}
          validateInput={this.state.validateInput}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  token: state.signupReducer.token,
  errors: state.signupReducer.errors,
  isSuccessful: state.signupReducer.isSuccessful,
  loading: state.signupReducer.loading,
});

SignupView.propTypes = {
  token: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.any,
    password: PropTypes.any,
    error: PropTypes.any,
  }),

};

SignupView.defaultProps = {
  token: "",
  errors: {},
};

export default connect(mapStateToProps, { signupAction })(SignupView);
