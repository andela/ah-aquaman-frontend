import React from "react";
import PropTypes from "prop-types";
import InputField from "../../commons/inputField";
import Label from "../../commons/label";

const Signup = (props) => {
  const {
    onSubmit, errors, onClick, isProcessing, onChange, disabled, validateInput,
  } = props;

  const title = "Author's Haven";

  return (
    <div className="login-wrapper">
      <div className="col-md-12">
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <Label
              htmlFor="username"
              text="Username"
            />
            <InputField
              onInputChange={onChange}
              className="form-control"
              name="username"
              type="text"
              placeholder="enter username"
            />
            <div>
              <span className="text-danger">{errors ? errors.username : ""}</span>
              <span className="text-danger">{validateInput.username ? "Username is too short" : ""}</span>
            </div>
          </div>
          <div className="form-group">
            <Label
              htmlFor="email"
              text="Email Address"
            />
            <InputField
              onInputChange={onChange}
              className="form-control"
              name="email"
              type="email"
              placeholder="enter email"
            />
            <div>
              <span className="text-danger">{errors ? errors.email : ""}</span>
              <span className="text-danger">{disabled ? "Email is invalid" : ""}</span>
            </div>
          </div>
          <div className="form-group">
            <Label
              htmlFor="password"
              text="Password"
            />
            <InputField
              onInputChange={onChange}
              className="form-control"
              name="password1"
              type="Password"
              placeholder="enter password"
            />
            <div>
              <span className="text-danger">{errors ? errors.password : ""}</span>
              <span className="text-danger">{validateInput.password ? "Password is too short" : ""}</span>
            </div>
          </div>
          <div className="form-group">
            <Label
              htmlFor="password"
              text="Password Confirmation"
            />
            <InputField
              onInputChange={onChange}
              className="form-control"
              name="password2"
              type="Password"
              placeholder="enter password"
            />
            <div>
              <span className="text-danger">{errors ? errors.password : ""}</span>
              <span className="text-danger">{validateInput.matchPassword ? "Passwords do not match" : ""}</span>
            </div>
          </div>
          <p>
            Already have an account?
            <a href="/login"> Login now</a>
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            id="signup-button"
            disabled={isProcessing}
            onClick={onClick}
            disabled={disabled}
          >
          Signup
          </button>
          <div>
            <p className="text-danger">{errors ? errors.error : ""}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    username: PropTypes.any,
    email: PropTypes.any,
    password: PropTypes.any,
    passwordConfirmation: PropTypes.any,
    error: PropTypes.any,
  }),
};
Signup.defaultProps = {
  errors: {},
};
export default Signup;
