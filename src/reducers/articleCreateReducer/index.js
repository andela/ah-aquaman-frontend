import { ArticleActionTypes } from "../../actions/types";


const initialState = {
  isSuccessful: false,
  isEditSuccessful: false,
  isArticleDeleted: false,
  errors: {},
};

const articleCreateReducer = (state = initialState, action) => {
  switch (action.type) {
  case ArticleActionTypes.CREATE_ARTICLE_FALIURE:
    return {
      ...state,
      isSuccessful: false,
      errors: action.payload,
    };
  case ArticleActionTypes.CREATE_ARTICLE_SUCCESS:
    return {
      ...state,
      article: action.payload,
      isSuccessful: true,
    };
  case ArticleActionTypes.EDIT_ARTICLE_SUCCESS:
    return {
      ...state,
      article: action.payload,
      isEditSuccessful: true,
    };
  case ArticleActionTypes.EDIT_ARTICLE_FALIURE:
    return {
      ...state,
      errors: action.payload,
      isEditSuccessful: false,
    };
  case ArticleActionTypes.DELETE_ARTICLE_SUCCESS:
    return {
      ...state,
      message: action.payload,
      isArticleDeleted: true,
    };
  default:
    return {
      ...state,
    };
  }
};

export default articleCreateReducer;
