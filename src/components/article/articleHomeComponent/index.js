import React, { Component } from "react";
import { connect } from "react-redux";
import { ArticleCard } from "../articleCard";
import fetchArticlesAction from "../../../actions/articleActions/fetchArticle";

export class Articles extends Component {
  componentWillMount = () => {
    this.props.fetchArticlesAction();
  };

  render() {
    const { articles } = this.props;

    const articleItems = articles.map((article, index) => {
      if (!article.image) {
        article.image = `https://source.unsplash.com/random/${index}`;
      }
      return <ArticleCard key={article.slug} {...article} />;
    });

    return (
      <div className="col-lg-8">
        <div className="article-container">{ articleItems }</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.fetchArticlesReducer.articles,
});

export default connect(
  mapStateToProps,
  { fetchArticlesAction },
)(Articles);
