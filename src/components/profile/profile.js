import React from "react";
import { connect } from "react-redux";
import { loadProfile } from "../../actions/profile/profileActions";
import bookmarkList from "../../actions/bookmarksListAction";
import ProfileView from "../../views/profile/profile";
import Navbar from "../article/navbarComponent/Navbar";
import ImageBanner from "../article/ImageBanner";
import Sidebar from "../article/sidebar";
import {
  getUserfollowing, getUserfollowers, followUser, unFollowUser,
} from "../../actions/followUnfollow/followUnfollow";


export class Profile extends React.Component {
  componentDidMount() {
    const username = this.props.match &&  this.props.match.params.username?this.props.match.params.username:localStorage.getItem("username");
      this.props.loadProfile(username);
      this.props.getUserfollowing(username);
      this.props.getUserfollowers(username); 
      this.props.bookmarkList();
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
    <ProfileView
      status={status}
      unFollowUser={this.unFollowUser} 
      isFollowing={this.isFollowing()}
      following={this.props.following}
      followers={this.props.followers}
      profile={profile}
      bookmarks={this.props.bookmarks}
    />
  );
}
}

export const mapStateToProps = state => ({
  profile: state.profile,
  following: state.followUnfollow.following,
  bookmarks: state.bookmarkListReducer.bookmarks,
  followers: state.followUnfollow.followers,
  isProcessing: state.followUnfollow.isFollowingSomeone,
});

export default connect(mapStateToProps, {
  loadProfile, getUserfollowing, getUserfollowers, bookmarkList, followUser, unFollowUser,
})(Profile);
