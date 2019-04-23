import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import getSingleArticle from "../../../actions/articleActions/getSingleArticle";
import { ArticleActionTypes } from "../../../actions/types";

const mockStore = configureStore([thunk]);

const slug = "article-slug";

const { BASE_URL } = process.env;

describe("fetch a single article test", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("should dispatch ARTICLE_FETCH_SUCCESSFUL action", () => {
    const expectedActions = [
      {
        type: ArticleActionTypes.ARTICLE_FETCH_SUCCESSFUL,
        payload: {},
      },
    ];

    fetchMock.getOnce(`${BASE_URL}/articles/${slug}`,
      {
        body: {},
        headers: {
          ContentType: "application/json",
        },
        status: 200,
      });

    const store = mockStore();

    return store.dispatch(getSingleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it("should dispatch ARTICLE_FETCH_NOT_FOUND action", () => {
    const expectedActions = [
      {
        type: ArticleActionTypes.ARTICLE_FETCH_NOT_FOUND,
        payload: null,
      },
    ];

    fetchMock.getOnce(`${BASE_URL}/articles/${slug}`,
      {
        body: {},
        status: 404,
        headers: { "content-type": "application/json" },
      });

    const store = mockStore();

    return store.dispatch(getSingleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
