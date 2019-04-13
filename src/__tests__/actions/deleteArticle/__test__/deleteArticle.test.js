import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import { DeleteArticle } from "../../../../actions/articleActions/createArticle";
import { ArticleActionTypes } from "../../../../actions/types";

const middlewarse = [thunk];
const mockStore = configureStore(middlewarse);

const { BASE_URL } = process.env;
const slug = "article-slug";

describe("delete articles test", () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });

  it("tests delete an article", () => {
    fetchMock.deleteOnce(`${BASE_URL}/articles/${slug}/`, {
      body: {
        article: "Article has been deleted",
      },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedAction = [
      {
        type: ArticleActionTypes.DELETE_ARTICLE_SUCCESS,
        payload: "Article has been deleted",
      },
    ];

    const store = mockStore();
    
    return store.dispatch(DeleteArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
