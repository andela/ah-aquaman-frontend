import React from "react";
import { Link } from "react-router-dom";
import ProfileStats from "./ProfileStats";
import Spinner from "./Spinner";

const ProfileView = (props) => {
  const { profile } = props;
  return (
    <div>
      {!profile ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-xs-12">
              <section className="profile mt-4">
                <div className="row">
                  <div className="col-md-3 offset-sm-1 col-sm-4 offset-md-3 col-2">
                    <img src={profile.image ? `${profile.image}` : "https://image.flaticon.com/icons/png/512/17/17004.png"} alt="" className="ourdp rounded img-fluid max-width: 100%; height: auto; " />
                  </div>
                  <div className="col-md-6 col-sm-7 col-10">
                    <h4>
                      <strong>{profile.username}</strong>
                      <Link to="/editprofile" className="btn ouredit btn-outline-dark">Edit Profile</Link>
                    </h4>
                    <ProfileStats />
                    <p className="lead my-4">{profile.bio ? `${profile.bio}` : "No bio set"}</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileView;
