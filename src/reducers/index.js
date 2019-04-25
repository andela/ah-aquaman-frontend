import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileReducer from "./profile/profileReducer";
import resetPasswordReducer from "./resetReducer/resetPasswordReducer";
import ArticleReducer from "./articleReducer";
import articleCreateReducer from "./articleCreateReducer";
import fetchArticlesReducer from "./fetchArticleReducer";
import tags from "./tags/tags";
import commentReducer from "./commentReducers";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile: profileReducer,
  resetPasswordReducer,
  ArticleReducer,
  articleCreateReducer,
  fetchArticlesReducer,
  tags,
  commentReducer,
});
