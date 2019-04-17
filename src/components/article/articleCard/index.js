import React, { Component } from "react";
import { Link } from "react-router-dom";
import parseDate from "../../../commons/getArticleDate";

export class ArticleCard extends Component {
  render() {
    return (
      <article>
        <div className="article-img">
          <img className="img-fluid" src={this.props.image} alt="" />
        </div>

        <div className="article-text">
          <div className="inner-text">
            <Link to={`/article/${this.props.slug}`} className="article-title">
              <h4>{this.props.title}</h4>
            </Link>
            <p>
              {(this.props.body).slice(0, 205)}
            </p>
            <div className="date">
              <p>
                <i className="fa fa-calendar" /> 
                {" "}
                {parseDate(this.props.created_at)}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-comments-o" /> 
                {" "}
                {24}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleCard;
