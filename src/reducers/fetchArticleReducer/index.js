import { ArticleActionTypes } from "../../actions/types";

const initialState = {
  articles: [],
};

const fetchArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ArticleActionTypes.FETCH_ARTICLES_SUCCESS:
    return {
      ...state,
      articles: action.payload,
    };
  default:
    return state;
  }
};

export default fetchArticlesReducer;
