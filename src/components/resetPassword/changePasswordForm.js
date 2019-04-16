import React from "react";
import PropTypes from "prop-types";
import image from "../../assets/background-image-3.jpg";

const ChangeForm = props => (
  <div>
    <img src={image} className="login background-image" alt="text" />
    <div className="login-wrapper">
      <h3>Authors Haven</h3>

      <form onSubmit={props.onSubmit}>

        <div className="form-group">
          <label htmlFor="newpassword">New Password</label>
          <input type="password" name="password" className="form-control" minLength={8} onChange={props.onChange} placeholder="Enter new password" required />
          <span className="text-danger">{props.passwordError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" name="confirmPassword" className="form-control" minLength={8} onChange={props.onChange} placeholder="Re-enter password" required />
        </div>
        
        <p><button className="btn btn-primary" id="login-button" onChange={props.onSuccessfulChange}>Change Password</button></p>

      </form>
    </div>
  </div>
);

ChangeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChangeForm;
