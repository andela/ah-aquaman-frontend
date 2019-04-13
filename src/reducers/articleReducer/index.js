import { ArticleActionTypes } from "../../actions/types";

const initialState = {
  loading: true,
  article: {
    title: "",
    body: "",
    image: "",
    description: "",
    author: {
      username: "",
      bio: "",
      image: "",
    },
  },
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
  case ArticleActionTypes.ARTICLE_FETCH_NOT_FOUND:
    return {
      ...state,
      loading: false,
    };

  case ArticleActionTypes.ARTICLE_FETCH_SUCCESSFUL:
    return {
      ...state,
      article: action.payload,
      loading: false,
    };

  default:
    return state;
  }
};
export default ArticleReducer;
