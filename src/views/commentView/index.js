import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import ReactTimeAgo from "react-time-ago";
import { addComment } from "../../actions/commentActions/index";

export class CommentView extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      const comment = (e.target.elements.comment.value).trim();
      const slug_name = (e.target.elements.slug_name.value);
      if (comment) {
        this.props.addComment(slug_name, comment);
      }
    };
    
    isLoggedIn=() => localStorage.getItem("token") === null;
    
    render() {
      const { comments } = this.props;
      const { slug } = this.props;

      return (
        <React.Fragment>
          {comments ? (<h3>{comments.length} Comments</h3>): (<h3>No Comments yet</h3>) }
          <div className="commentslist">
            {
              comments 
                ? comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <div className="media">
                      <div className="media-body">
                        <h4>
                          <label id="" className="float-left">{comment.body}</label>
                          <small className="float-right">{<Moment fromNow>{comment.created_at}</Moment>}</small>
                        </h4>
                        <p>{comment.commented_by.username}</p>
                        <div className="separator" />
                      </div>    
                    </div>    
                  </div>
                ))
                : ""
            }
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="hidden" name="slug_name" className="form-control mt-3" value={slug} />
              <textarea name="comment" className="form-control" placeholder="Enter your comment" />
              <button
                type="submit"
                onClick={(e) => {
                  { this.isLoggedIn() ? document.location.href = "/login" : (this.handleSubmit);
                  } 
                }}
                className="btn btn-default"
              >
                {this.isLoggedIn() ? "Login to comment" : "Post Comment"}
              </button>
            </div>
          </form>
        </React.Fragment>
      );
    }
}

export const mapStateToProps = state => ({
  comments: state.commentReducer.comments,
});

export default connect(mapStateToProps, { addComment })(CommentView);
