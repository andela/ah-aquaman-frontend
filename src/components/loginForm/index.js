import React from "react";
import PropTypes from "prop-types";
import Button from "../../commons/buttons";
import InputField from "../../commons/inputField";
import ErrorMessage from "../../commons/errorMessage";
import Social from "./socialComponent";

const Login = (props) => {
  const {
    onSubmit, errors, onRegister, onPassword, isProcessing, facebookHandler, googleHandler,
  } = props;
  const emailError = errors ? errors.email : "";
  const passwordError = errors ? errors.password : "";
  const header = "Author's Haven";
  return (
    <div className="login-wrapper">
      <div className="col-md-12">
        <h3>{header}</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <InputField 
              className="form-control"
              name="email"
              type="email" 
              placeholder="enter email"
            />
            <div>
              <ErrorMessage
                text={emailError}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <InputField 
              className="form-control"
              name="password"
              type="Password" 
              placeholder="enter password"
            />
            <div>
              <ErrorMessage
                text={passwordError}
              />
            </div>
          </div>
          <p className="text-login-button">
            <Button 
              className="btn btn-primary"
              id="login-button"
              type="submit" 
              text="Login"
              isProcessing={isProcessing}
            />
          </p>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <Button 
                  className="text-primary float-left"
                  id="register"
                  onClick={onRegister}
                  text="Create an Account"
                />
              </div>
              <div className="col-md-6">
                <Button 
                  className="text-primary float-right"
                  onClick={onPassword}
                  id="reset-password"
                  text="Forgot Password?"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-danger">{errors ? errors.error : ""}</p>
          </div>
        </form>
        <Social facebookHandler={facebookHandler} googleHandler={googleHandler} />
      </div>
    </div>
  );
};
Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.any,
    password: PropTypes.any,
    error: PropTypes.any,
  }),
};
Login.defaultProps = {
  errors: {},
};
export default Login;
