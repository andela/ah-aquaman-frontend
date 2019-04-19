import {ArticleActionTypes} from "../../actions/types";

const initialState = {
  bookmarks: [],
  bookmarks_empty_message: '',
  isBookmarked: false,
};

const getIsBookmarked = (bookmarks, slug) => {
  const filtered = bookmarks.filter(bookmark => bookmark.slug === slug);
  return filtered.length > 0;
};

const bookmarkListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload,
        isBookmarked: getIsBookmarked(action.payload, action.slug),
      };
    default:
      return { ...state };
  }
};

export default bookmarkListReducer;
