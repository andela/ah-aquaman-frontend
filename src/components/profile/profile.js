import React from "react";
import { connect } from "react-redux";
import { loadProfile } from "../../actions/profile/profileActions";
import ProfileView from "../../views/profile/profile";
import Navbar from "../article/navbarComponent/Navbar";
import ImageBanner from "../article/ImageBanner";
import Sidebar from "../article/sidebar";
import {
  getUserfollowing, getUserfollowers, followUser, unFollowUser,
} from "../../actions/followUnfollow/followUnfollow";


export class Profile extends React.Component {
  componentDidMount() {
    const username = this.props.match && this.props.match.params.username ? this.props.match.params.username : localStorage.getItem("username");
    this.props.loadProfile(username);
    this.props.getUserfollowing(username);
    this.props.getUserfollowers(username);
  }

  isOwner=() => (this.props.match && this.props.match.params.username ? localStorage.getItem("username") === this.props.match.params.username : true)

  unFollowUser=(user, should) => {
    { should ? this.props.unFollowUser(user) : this.props.followUser(user); }
  }

isFollowing=() => {
  let followed = false;
  if (this.props.followers.followers) {
    this.props.followers.followers.forEach((element) => {
      if (element.username === localStorage.getItem("username")) {
        followed = true;
      }
    });
  }
  return followed;
}

render() {
  const { isLoading, profile } = this.props.profile;

  const status = {
    isOwner: this.isOwner(),
    isProcessing: this.props.isProcessing,
  };
  return (
    <ProfileView status={status} unFollowUser={this.unFollowUser} isFollowing={this.isFollowing()} following={this.props.following} followers={this.props.followers} profile={profile} />
  );
}
}

export const mapStateToProps = state => ({
  profile: state.profile,
  following: state.followUnfollow.following,
  followers: state.followUnfollow.followers,
  isProcessing: state.followUnfollow.isFollowingSomeone,
});

export default connect(mapStateToProps, {
  loadProfile, getUserfollowing, getUserfollowers, followUser, unFollowUser,
})(Profile);
