import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import ReactTimeAgo from "react-time-ago";
import FollowingList from "./followingList";
import FollowersList from "./followersList";

const ProfileStats = (props) => {
  const { following, followers } = props;
  const list = props.following.following;
  const followersList = followers.followers;
  return (
    <div className="row">
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <FollowingList list={list} />
      </div>
      <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <FollowersList followersList={followersList} />
      </div>
      <div className="col-md-4">
        <strong>35 </strong>
      Posts
      </div>
      <div className="col-md-4" data-toggle="modal" data-target="#exampleModal1">
        <strong>
          {followers.follower_count ? followers.follower_count : 0}
          {" "}
        </strong>
        {followers.follower_count === 1 ? "Follower" : "Followers"}
      </div>
      <div className="col-md-4" data-toggle="modal" data-target="#exampleModal">
        <strong>
          {following.following_count ? following.following_count : "0"}
          {" "}
        </strong>
      Following
      </div>
    </div>
  );
};

export default ProfileStats;
