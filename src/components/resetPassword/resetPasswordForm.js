import React from "react";
import PropTypes from "prop-types";
import image from "../../assets/background-image-3.jpg";

const ResetForm = props => (
  <div>
    <img src={image} className="login background-image" alt="text" />
    <div className="login-wrapper">
      <h3>Authors Haven</h3>

      <form id="reset-form" onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" className="form-control" onChange={props.onChange} placeholder="Enter email" required />
          <span className="text-danger">{props.emailError}</span>
        </div>
        
        <p><button className="btn btn-primary" id="login-button" disabled={props.disabled}>Reset Password</button></p>

      </form>
    </div>
  </div>
);

ResetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResetForm;
