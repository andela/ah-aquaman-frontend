import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import fetchArticlesAction from "../../../../actions/articleActions/fetchArticle";
import { ArticleActionTypes } from "../../../../actions/types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const { BASE_URL } = process.env;

describe("fetch async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("it should fetch all articles", () => {
    fetchMock.getOnce(
      `${BASE_URL}/articles/`,
      {
        headers: { "content-type": "application/json" },
        body: {
          articles: [],
        },
      },
    );

    const store = mockStore({});

    const expectedActions = [
      {
        type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
        payload: [],
      },
    ];
    
    return store.dispatch(fetchArticlesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
