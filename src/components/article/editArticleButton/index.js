import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";

export class EditButton extends Component {
  render() {
    const decoded = jwt.decode(localStorage.getItem("token"));
    if (decoded) {
      const loggedUser = decoded.username;
      const hideButton = loggedUser === this.props.username;
      return (
        <Link to={`/editor/${this.props.slug}`}>
          <span
            className="btn btn-primary mr-3"
            slug={this.props.slug}
            hidden={!hideButton}
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            data-tip="Edit the Article"
          >
            <i className="fa fa-pencil-alt" />
            {" "}
            Edit
          </span>
        </Link>
      );
    }
    return null;
  }
}

export const mapStateToProps = state => ({
  EditState: state.articleCreateReducer,
});

export default connect(mapStateToProps)(EditButton);
