import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Editor from "../../components/article/articleEditor";
import { EditArticle } from "../../actions/articleActions/createArticle";
import getSingleArticle from "../../actions/articleActions/getSingleArticle";
import Sidebar from "../../components/article/sidebar";
import Navbar from "../../components/article/navbarComponent/Navbar";
import ImageBanner from "../../components/article/ImageBanner";

export class EditArticleView extends Component {
  constructor() {
    const retrivedArticle = JSON.parse(localStorage.getItem("article"));
    super();
    this.state = {
      title: retrivedArticle.title,
      description: retrivedArticle.description,
      body: retrivedArticle.body,
      tags: retrivedArticle.tagList,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.slug) {
      this.props.getSingleArticle(this.props.match.params.slug);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isEditSuccessful) {
      this.handleErrors(nextProps);
    }

    if (nextProps.isEditSuccessful) {
      this.props.history.push(`/article/${nextProps.match.params.slug}`);
    }
  }

  handleErrors = (props) => {
    if (props.errors.title) {
      toast.error("title can not be blank");
    }

    if (props.errors.description) {
      toast.error("description can not be blank");
    }

    if (props.errors.body) {
      toast.error("Body can not be blank");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const editPayload = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
    };
    this.props.EditArticle(this.props.match.params.slug, editPayload);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ImageBanner info="Edit Article" page="editor" />
        <div className="container">
          <div className="row">
            <Editor
              {...this.state}
              onSubmit={this.handleSubmit}
              onInputChange={this.handleInput}
              slug={this.props.slug}
            />
            <Sidebar />
          </div>
          <ToastContainer />
        </div>
      </React.Fragment>
      
    );
  }
}

export const mapStateToProps = state => ({
  errors: state.articleCreateReducer.errors,
  isEditSuccessful: state.articleCreateReducer.isEditSuccessful,
});

export default connect(mapStateToProps, { getSingleArticle, EditArticle })(EditArticleView);
