import React from "react";
import Moment from "react-moment";
import ReactTimeAgo from "react-time-ago";

const FollowersList = (props) => {
  const { followersList } = props;
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">The Followers List</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body list-group">
          {followersList && followersList.length > 0 ? (
            followersList.map(item => (
              <div
                onClick={() => {
                  document.location.href = `/profile/${item.username}`;
                }}
                key={item.username}
                className="flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <div className="row">
                    <div className="col-md-4">
                      {" "}
                      <img src={item.image ? `${item.image}` : "https://image.flaticon.com/icons/png/512/17/17004.png"} alt="" className="ourdp2 rounded img-fluid " />
                    </div>
                    <div className="col-md-8">
                      {" "}
                      <h5 className="mb-1">{item.username}</h5>
                      <p className="mb-1 text-truncate">{item.bio}</p>
                    </div>
                  </div>
                  <small>{<Moment fromNow>{item.followed_at}</Moment>}</small>
                </div>

              </div>


            ))

          ) : "No one is on the followers List"
          }


        </div>
      </div>
    </div>

  );
};

export default FollowersList;
