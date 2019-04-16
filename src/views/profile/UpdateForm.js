import React from "react";
import Spinner from "./Spinner";

const UpdateForm = (props) => {
  const {
    onSubmit, onChange, isUpdating, profile,
  } = props;
  return (
    <form onSubmit={onSubmit} className="updateForm">
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label"><strong>Username</strong></label>
        <div className="col-sm-10">
          <input type="text" className="form-control" readOnly id="username" defaultValue={profile ? `${profile.username}` : ""} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="bio" className="col-sm-2 col-form-label"><strong>Bio</strong></label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="bio" name="bio" defaultValue={profile && profile.bio ? `${profile.bio}` : ""} onChange={onChange} required />
          <div className="row">
            <div className="col-md-1">
              <input
                type="submit"
                className="btn btn-outline-dark mt-4"
                disabled={isUpdating}
                value={!isUpdating ? "Submit" : "Please wait"}
              />
            </div>
            <div className="col-md-11">
              {isUpdating ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
