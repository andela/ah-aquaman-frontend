import React from "react";
import { Link } from "react-router-dom";
import ProfileStats from "./ProfileStats";
import Spinner from "./Spinner";
import Sidebar from "../../components/article/sidebar";
import Navbar from "../../components/article/navbarComponent/Navbar";
import ImageBanner from "../../components/article/ImageBanner";

const ProfileView = (props) => {
  const { profile } = props;
  return (
    <React.Fragment>
      <div className="col-md-8">
        {!profile ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <img src={profile.image ? `${profile.image}` : "https://image.flaticon.com/icons/png/512/17/17004.png"} alt="" className="ourdp rounded img-fluid max-width: 100%; height: auto; " />
            </div>
            <div className="col-md-9 col-sm-8">
              <h4>
                <strong>{profile.username}</strong>
                <Link to="/editprofile" className="btn ouredit btn-outline-dark">Edit Profile</Link>
              </h4>
              <ProfileStats />
              <p className="lead my-4">{profile.bio ? `${profile.bio}` : "No bio set"}</p>
            </div>
          </div>
        )}
      </div>
  
    </React.Fragment>
  );
};
export default ProfileView;
