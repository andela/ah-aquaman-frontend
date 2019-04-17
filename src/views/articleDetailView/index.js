import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ArticleComponent from "../../components/article/articleComponent";
import getSingleArticle from "../../actions/articleActions/getSingleArticle";
import CircularProgressLoader from "../../commons/progressLoader";
import Sidebar from "../../components/article/sidebar";
import Navbar from "../../components/article/navbarComponent/Navbar";
import ImageBanner from "../../components/article/ImageBanner";

export class ArticleDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    const { props } = this;
    const { slug } = props.match.params;

    props.getSingleArticle(slug);
    localStorage.setItem("slug", slug);
  }

  componentWillReceiveProps(props) {
    this.setState({ loading: props.article.loading });
  }

  render() {
    const { article } = this.props;
    const loader = this.state;
    if (this.state.loading) {
      return (
        <CircularProgressLoader {...loader} />
      );
    }

    if (article.title === "") {
      return (
        <div className="h-100 w-100 p-5 m-5  text-center">
          {toast.error("Article not found", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
          })}
;
        </div>
      );
    }

    return (
      <React.Fragment>
        <Navbar />
        <ImageBanner info="View Article" page="view_article" />
        <section className="blog-section">
          <div className="container">
            <div className="row">
              <ArticleComponent
                article={article}
                slug={this.props.match.params.slug}
              />
              <Sidebar />
            </div>
            <ToastContainer />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.ArticleReducer.loading,
  article: state.ArticleReducer.article,
});

export default connect(mapStateToProps, { getSingleArticle })(ArticleDetailView);
