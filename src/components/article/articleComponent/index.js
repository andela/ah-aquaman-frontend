import React from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
import EditButton from "../editArticleButton";
import DeleteButton from "../deleteArticleButton";
import parseDate from "../../../commons/getArticleDate";

function getImage(image) {
  if (image !== null) return "https://res.cloudinary.com/wasibani/image/upload/v1555329619/AuthorsHaven/background-image-3.jpg";
  return image;
}

const ArticleComponent = props => (
  <div className="col-lg-8">
    <div className="article-container">
      <div className="details">
        <img className="img-responsive avatar" src={getImage(props.article.image)} alt="author avatar" />
        <h4>{props.article.title}</h4>
        <div className="user-details">
          <div className="float-left">
            { 
              props.article.tagList.length > 0
                ? <Link to="#">Tag Example</Link>
                : <Link to="#">No Tags</Link>
            }
          </div>
          <div className="float-right">
            <div className="media">
              <div className="media-body">
                <h5>{props.article.author.username}</h5>
                <p>{ parseDate(props.article.created_at) }</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          {Parser(String(props.article.body))}
        </p>
        <div className="row">
          <div className="col-md-6">
            <EditButton
              onClick={props.onClick}
              slug={props.slug}
              username={props.article.author.username}
            />
          </div>
          <div className="col-md-6">
            <DeleteButton
              onClick={props.onClick}
              slug={props.slug}
              username={props.article.author.username}
            />
          </div>
        </div>
        <div className="separator" />
      </div>
    </div>
  </div>
);

export default ArticleComponent;
