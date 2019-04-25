import React from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
import EditButton from "../editArticleButton";
import DeleteButton from "../deleteArticleButton";
import RateButton from "../rateArticleButton";
import parseDate from "../../../commons/getArticleDate";
import TagComponent from "./tagComponent";
import CommentView from "../../../views/commentView";
import Ratings from "../ratingsComponent";
import RatingModal from "../ratingsModel";


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
        <Ratings rating={parseFloat(props.article.user_rating)} />
        <div className="user-details">
          <div className="float-left">

            {
              props.article.tagList.length > 0
                ? (props.article.tagList.map(tag => (<TagComponent tag={tag} key={tag} />)))
                : <Link to="#">No Tags</Link>
            }
          </div>
          <div className="float-right">
            <div className="media">
              <div className="media-body">
                <h5>{props.article.author.username}</h5>
                <p>
                  { parseDate(props.article.created_at) }
                  <span className="ml-2">
                    <i className="fa fa-clock" /> 
                    {props.article.read_time}
                  </span> 
                </p>
              </div>
            </div>
          </div>
        </div>

        <p>
          {Parser(String(props.article.body))}
        </p>
        <div className="share">
          <h1 className="articleShare">You can share this article here</h1>
          <a data-tip="Share on FB" rel="noopener noreferrer" target="_blank" href={props.article.shareLinks.facebookShare}><span className="m-2"><i className="fab fa-facebook-square  fa-lg" /></span></a>
          <a data-tip="Share on twitter" rel="noopener noreferrer" target="_blank" href={props.article.shareLinks.twitterShare}><span className="m-2"><i className="fab fa-twitter-square  fa-lg" /></span></a>
          <a data-tip="Share on email" rel="noopener noreferrer" target="_blank" href={props.article.shareLinks.mailshare}><span className="m-2"><i className="fas fa-envelope-square  fa-lg" /></span></a>
        </div>
        <EditButton
          onClick={props.onClick}
          slug={props.slug}
          username={props.article.author.username}
        />

        <DeleteButton
          onClick={props.onClick}
          slug={props.slug}
          username={props.article.author.username}
        />

        <RateButton username={props.article.author.username} />
        <div className="separator" />
      </div>
      <div className="comments-container">
      <CommentView slug={props.slug}/>
      </div>
    </div>
    <RatingModal article={props.article} />
  </div>
);

export default ArticleComponent;
