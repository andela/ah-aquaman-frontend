import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ArticleComponent from "../../components/article/articleComponent";
import getSingleArticle from "../../actions/articleActions/getSingleArticle";
import CircularProgressLoader from "../../commons/progressLoader";
import Sidebar from "../../components/article/sidebar";
import Navbar from "../../components/article/navbarComponent/Navbar";
import ImageBanner from "../../components/article/ImageBanner";
import { bookmarkArticleAction, bookmarkListing } from "../../actions/articleActions/bookmarkAction";
import { getComments } from "../../actions/commentActions/index";

function ShareLinks(article, slug) {
  const articleLink = `${process.env.FRONTEND_BASE_URL}/article/${slug}`;
  const shareBody = `I found this article to be worth reading, ${article.title} ${articleLink}`;
  const mailshare = `mailto:?Subject=${encodeURI(article.title)}&body=${shareBody}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(articleLink)}`;
  const twitterShare = `https://twitter.com/home?status=${encodeURI(shareBody)}`;

  return {
    mailshare, facebookShare, twitterShare,
  };
}

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
    props.bookmarkListing(slug);
    props.getComments(slug);
  }

  componentWillReceiveProps(props) {
    this.setState({ loading: props.article.loading });
  }

  handleBookmark = (e) => {
    e.preventDefault();
    const { slug } = this.props.match.params;
    const { isBookmarked } = this.props;
    this.props.bookmarkArticleAction(slug, isBookmarked);
  }

  render() {   
    const { article } = this.props;
    const loader = this.state;
    const loggedInUsername = localStorage.getItem("username");
    const articleAuthorUsername = article.author.username;
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
    article.shareLinks = ShareLinks(article, this.props.match.params.slug);
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
                handleBookmark={this.handleBookmark}
                isBookmarked={this.props.isBookmarked}
                loggedInUsername={loggedInUsername}
                articleAuthorUsername={articleAuthorUsername}
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
  isBookmarked: state.bookmarkReducer.isBookmarked,
  message: state.bookmarkReducer.message,
});

export default connect(mapStateToProps, 
  { getSingleArticle, bookmarkArticleAction, bookmarkListing, getComments })(ArticleDetailView);
