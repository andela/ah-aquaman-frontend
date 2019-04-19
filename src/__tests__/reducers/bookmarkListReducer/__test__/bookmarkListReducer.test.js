import {ArticleActionTypes} from "../../../../actions/types";
import bookmarkListReducer from "../../../../reducers/bookmarkListReducer";

const initialState = {
  bookmarks: [],
  isBookmarked: undefined,
  bookmarks_empty_message: '',
};

describe('bookmarkListReducer', () => {
  it('should return the correct state for bookmarks fetched', () => {
    const action = {
      type: ArticleActionTypes.FETCH_BOOKMARKS_SUCCESS,
      payload: [{ title: 'dkekkd', slug: 'dededed' }],
    };
    const expectedState = {
      bookmarks: [{ title: 'dkekkd', slug: 'dededed' }],
      bookmarks_empty_message: '',
      isBookmarked: false,

    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the correct state for unidefined', () => {
    const action = {
      type: '',
      bookmarks: [],
    };
    const expectedState = {
      bookmarks: [],
      isBookmarked: undefined,
      bookmarks_empty_message: '',
    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });
});
