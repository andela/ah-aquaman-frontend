import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Social = (props) => {
  const {
    facebookHandler,
    googleHandler,
  } = props;

  return (
    <React.Fragment>
      <hr className="separator" />
      <p className="text-or text-center">
        <span>OR</span>
      </p>
      <p className="social-text">You can simply login with your social-media account</p>
      <div className="social">
        <FacebookLogin 
          appId="284045129195982"
          fields="name,email,picture"
          textButton=""
          id="facebook-button"
          icon={<FontAwesomeIcon icon={faFacebook} />}
          callback={facebookHandler}
        />
       
        <GoogleLogin
          clientId="594594308012-ls74dabh7s3tunj0kceatf63ihjh6vsr.apps.googleusercontent.com"
          buttonText=""
          onSuccess={googleHandler}
          onFailure={googleHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Social;
