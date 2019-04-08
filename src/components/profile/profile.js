import React from "react";
import { connect } from "react-redux";
import { loadProfile } from "../../actions/profile/profileActions";
import ProfileView from "../../views/profile/profile";


export class Profile extends React.Component {
  componentDidMount() {
    (!this.checkAuth() && this.props.history) ? this.props.history.push("/login") : this.props.loadProfile();
  }

  checkAuth=() => (localStorage.getItem("token") && localStorage.getItem("username"))

  render() {
    const { isLoading, profile } = this.props.profile;
    return (
      <ProfileView isLoading={isLoading} profile={profile} />
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { loadProfile })(Profile);
