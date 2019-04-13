import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { DeleteArticle } from "../../../actions/articleActions/createArticle";


export class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isArticleDeleted) {
      this.props.history.push("/");
      toast.success("Article successfully deleted", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      this.props.DeleteArticle(this.props.slug);
    }
  }

  render() {
    const decoded = jwt.decode(localStorage.getItem("token"));
    if (decoded) {
      const loggedInUser = decoded.username;
      const hideButton = loggedInUser === this.props.username;
      return (
        <span
          className="btn btn-danger mr-3"
          slug={this.props.slug}
          onClick={this.handleDelete}
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
          hidden={!hideButton}
          data-tip="Delete the Article"
        >
          <i className="fas fa-trash-alt" />
          {" "}
          Delete
        </span>
      );
    }
    return null;
  }
}


export const mapStateToProps = state => ({
  isArticleDeleted: state.articleCreateReducer.isArticleDeleted,
});

export default withRouter(connect(mapStateToProps, { DeleteArticle })(DeleteButton));
