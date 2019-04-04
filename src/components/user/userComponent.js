import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserInfo = ({ testMessage }) => <div>{testMessage}</div>;

UserInfo.propTypes = {
  testMessage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  // get testMessage form the user reducer
  testMessage: state.user.testMessage,
});
export default connect(mapStateToProps)(UserInfo);
