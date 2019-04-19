import React from "react";

const ProfileButton = (props) => {
  const {
    isProcessing, isFollowing, unFollowUser, username,
  } = props;
  return (
    <button
      disabled={isProcessing}
      onClick={isFollowing ? () => { unFollowUser(username, true); } : () => { unFollowUser(username, false); }}
      className="btn ouredit btn-outline-dark"
    >
      {isProcessing ? "Please wait" : !isFollowing ? "Follow" : "Unfollow"}
    </button>

  );
};

export default ProfileButton;
