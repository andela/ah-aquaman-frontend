import React, { Component } from "react";
import { Link } from "react-router-dom";
import parseDate from "../../../commons/getArticleDate";
import Ratings from "../ratingsComponent";

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
              <table className="table mb-0 borderless">
                <tbody>
                  <tr>
                    <td className="p-0">
                      <i className="fa fa-calendar" />
                      {" "}
                      {parseDate(this.props.created_at)}
                    </td>
                    <td className="p-0 text-center">
                      <i className="fa fa-clock" /> 
                      {" "}
                      {this.props.read_time}
                    </td>
                    <td className="p-0 text-center">
                      <Ratings rating={parseFloat(this.props.user_rating)} />
                    </td>
                    <td className="text-right p-0" onClick={() => document.location.href = `/profile/${this.props.author.username}`}>
                      {this.props.author.username}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleCard;
