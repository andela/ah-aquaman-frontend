import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Editor from "../../components/article/articleEditor";
import { CreateArticle } from "../../actions/articleActions/createArticle";
import Sidebar from "../../components/article/sidebar";
import Navbar from "../../components/article/navbarComponent/Navbar";
import ImageBanner from "../../components/article/ImageBanner";

export class CreateArticleView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      body: "",
      tagList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSuccessful) {
      this.handleErrors(nextProps);
    } else {
      this.props.history.push(`/article/${nextProps.article.slug}`);
    }
  }

  handleChange=(tagList) => {
    const sorted = [];
    tagList.forEach((element) => {
      sorted.push(element.toLowerCase());
    });
    sorted.sort();
    this.setState({
      tagList: Array.from(new Set(sorted)),
    });
  }

  handleErrors = (props) => {
    if (props.errors.title) {
      toast.error(props.errors.title);
    }
    if (props.errors.description) {
      toast.error(props.errors.description);
    }
    if (props.errors.body) {
      toast.error(props.errors.body);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      tagList: this.state.tagList,
    };

    this.props.CreateArticle(payload);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ImageBanner info="Create Article" page="create_article" />
        <div className="container">
          <div className="row">
            <Editor

              {...this.state}
              onSubmit={this.handleSubmit}
              onInputChange={this.handleInput}
              value={this.state.tagList}
              onChange={this.handleChange}
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
  isSuccessful: state.articleCreateReducer.isSuccessful,
  errors: state.articleCreateReducer.errors,
  article: state.articleCreateReducer.article,
});

export default connect(mapStateToProps, { CreateArticle })(CreateArticleView);
