import {
  BOOKMARK_SUCCESS, UNBOOKMARK_SUCCESS, BOOKMARK_LIST_FETCHED, BOOKMARK_FAIL, 
} from "../../../../actions/types";
import bookmarkReducer from "../../../../reducers/bookmarkReducer";

describe("bookmark article reducer", () => {
  it("should return the initial state", () => {
    const initialState = bookmarkReducer(undefined, {});
    expect(initialState).toEqual({
      bookmarks: [],
      isBookmarked: false,
    });
  });

  it("should handle successful bookmarking of an article", () => {
    const initialState = {
      isBookmarked: false,
    };
   
    const expected = {
      ...initialState,
      isBookmarked: true,
      message: "message",
    };

    const action = {
      type: BOOKMARK_SUCCESS,
      payload: "message",
    };

    const newState = bookmarkReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it("should handle successful unbookmarking of an article", () => {
    const initialState = {
      isBookmarked: true,
    };
   
    const expected = {
      ...initialState,
      isBookmarked: false,
      message: "message",
    };

    const action = {
      type: UNBOOKMARK_SUCCESS,
      payload: "message",
    };

    const newState = bookmarkReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it("should handle successful fetching of a users bookmarks list", () => {
    const initialState = {
      bookmarks: [],
      isBookmarked: true,
    };
   
    const expected = {
      ...initialState,
      bookmarks: [{ article: { slug: "mySlug" } }],
    };

    const action = {
      type: BOOKMARK_LIST_FETCHED,
      payload: [{ article: { slug: "mySlug" } }],
      slug: "mySlug",
    };

    const newState = bookmarkReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it("should handle bookmark failure", () => {
    const initialState = {
      bookmarks: [],
      isBookmarked: false,
      error: "error message",
    };
   
    const expected = {
      ...initialState,
      bookmarks: [],
    };

    const action = {
      type: BOOKMARK_FAIL,
      error: "error message",
    };
    
    const newState = bookmarkReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
