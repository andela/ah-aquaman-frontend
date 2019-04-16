import React from "react";
import Progress from "./Progress";
import UpdateForm from "./UpdateForm";

const EditProfileView = (props) => {
  const {
    isUpdating, onSubmit, onChange, profile, state,
    handleChange,
  } = props;
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          Edit Profile
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-2 d-none d-sm-block">
              <ul className="list-group">
                <li className="list-group-item bg-light"><strong>Edit Profile</strong></li>
                <li className="list-group-item">Change Password</li>
              </ul>
            </div>
            <div className="col-md-10">
              <div className="container">
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-2">
                        <img src={state.url ? state.url : "https://bit.ly/2Ghxc2g"} height={50} width={50} alt="dp" className="rounded" />
                      </div>
                      <div className="col-md-10">
                        <span className="lead">
                          {profile ? (
                            <strong>
                              {profile.email}
                            </strong>
                          ) : ""}
                        </span>
                        <br />
                        <input type="file" name="FileInput" className="btn btn-block siteColor bg-light" accept="image/*" onChange={handleChange} />

                        <p className="text-primary">Change Profile picture</p>
                        {state.isUploading ? (
                          <Progress percentage={state.progress} />
                        ) : ""}
                      </div>
                    </div>
                    <UpdateForm
                      isUpdating={isUpdating}
                      profile={profile}
                      onSubmit={onSubmit}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileView;
