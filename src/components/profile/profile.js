import React from "react";
import { connect } from "react-redux";
import { loadProfile } from "../../actions/profile/profileActions";
import ProfileView from "../../views/profile/profile";
import Navbar from "../article/navbarComponent/Navbar";
import ImageBanner from "../article/ImageBanner";
import Sidebar from "../article/sidebar";


export class Profile extends React.Component {
  componentDidMount() {
    (!this.checkAuth() && this.props.history) ? this.props.history.push("/login") : this.props.loadProfile();
  }

  checkAuth=() => (localStorage.getItem("token") && localStorage.getItem("username"))

  render() {
    const { isLoading, profile } = this.props.profile;
    return (
      <React.Fragment>
        <Navbar />
        <ImageBanner info="User Profile" page="profile" />
        <section className="blog-section">
          <div className="container">
            <div className="row">
              <ProfileView isLoading={isLoading} profile={profile} />
              <Sidebar />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { loadProfile })(Profile);
