import {
  BOOKMARK_SUCCESS, UNBOOKMARK_SUCCESS, BOOKMARK_LIST_FETCHED, BOOKMARK_FAIL, 
} from "../../actions/types";

const initialState = {
  bookmarks: [],
  isBookmarked: false,
};

const getIsBookmarked = (bookmarks, slug) => {
  const filtered = bookmarks.filter(bookmarks => bookmarks.article.slug === slug);
  return filtered.length > 0;
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
  case BOOKMARK_LIST_FETCHED:
    return {
      ...state,
      bookmarks: action.payload,
      isBookmarked: getIsBookmarked(action.payload, action.slug),
    };

  case BOOKMARK_SUCCESS:
    return {
      ...state,
      isBookmarked: true,
      message: action.payload,
    };

  case UNBOOKMARK_SUCCESS:
    return {
      ...state,
      isBookmarked: false,
      message: action.payload,
    };

  case BOOKMARK_FAIL:
    return {
      ...state,
      isBookmarked: false,
      message: action.payload,
    };
    
  default:
    return state;
  }
}; 
  
export default bookmarkReducer;
