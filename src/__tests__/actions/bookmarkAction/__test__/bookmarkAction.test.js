import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { bookmarkArticleAction, bookmarkListing } from "../../../../actions/articleActions/bookmarkAction";
import {
  BOOKMARK_SUCCESS, BOOKMARK_FAIL, UNBOOKMARK_SUCCESS, BOOKMARK_LIST_FETCHED, 
} from "../../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const slug = "articleSlug";

describe("bookmark article action", () => {
  let token;
  let bookmarkUrl;
  let store;

  beforeEach(() => {
    token = "hjbchbvawf";
    bookmarkUrl = `${BASE_URL}/articles/${slug}/bookmark/`;
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("handles successful bookmarking of an article", () => {
    fetchMock.postOnce(bookmarkUrl, {
      body: { message: "Article has been bookmarked" },
      headers: {
        "content-type": "application/json", 
        Authorization: `Bearer ${token}`, 
      },
    });

    const expectedActions = [{
      type: BOOKMARK_SUCCESS,
      payload: "Article has been bookmarked",
    }];
    return store.dispatch(bookmarkArticleAction(slug, false)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles successful unbookmarking of an article", () => {
    fetchMock.deleteOnce(bookmarkUrl, {
      body: { message: "Article has been unbookmarked" },
      headers: { 
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const expectedActions = [{
      type: UNBOOKMARK_SUCCESS,
      payload: "Article has been unbookmarked",
    }];
    return store.dispatch(bookmarkArticleAction(slug, true)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles failed bookmark action", () => {
    fetchMock.postOnce(bookmarkUrl, {
      body: { error: "error message" },
      headers: { 
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const expectedActions = [{
      type: BOOKMARK_FAIL,
      payload: "error message",
    }];
    return store.dispatch(bookmarkArticleAction(slug, false)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("user bookmarks listing action", () => {
  let bookmarkListUrl;
  let store;
  let token;
  
  beforeEach(() => {
    token = "hjbchbvawf";
    bookmarkListUrl = `${BASE_URL}/bookmarks/`;
    store = mockStore();
  });
  
  afterEach(() => {
    fetchMock.restore();
  });
  
  it("handles successful fetching of bookmark list", () => {
    fetchMock.getOnce(bookmarkListUrl, {
      body: { data: [] },
      headers: {
        "content-type": "application/json", 
        Authorization: `Bearer ${token}`, 
      },
    });
  
    const expectedActions = [{
      type: BOOKMARK_LIST_FETCHED,
      payload: { data: [] },
      slug,
    }];
    return store.dispatch(bookmarkListing(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
