import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {ArticleActionTypes} from "../../../actions/types";
import bookmarkListing from "../../../actions/bookmarksListAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

describe('bookmark list fetch action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches BOOKMARK_LIST_FETCHED when bookmark listing is done', () => {
    const expectedAction = [{
      type: ArticleActionTypes.FETCH_BOOKMARKS_SUCCESS,
      payload: {"data": [], "headers": {"Content-Type": "application/json", "authorization": "Bearer null"}, "mode": "cors"},
    }];

    fetchMock.getOnce(`${BASE_URL}/bookmarks/`, {
      data: [],
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      mode: 'cors',
    });
    const store = mockStore();
    return store.dispatch(bookmarkListing()).then(() => {
      console.log(store.getActions());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
