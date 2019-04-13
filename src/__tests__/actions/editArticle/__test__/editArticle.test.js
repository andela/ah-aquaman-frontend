import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import { EditArticle } from "../../../../actions/articleActions/createArticle";
import { ArticleActionTypes } from "../../../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

const { BASE_URL } = process.env;

const data = {
  title: "test article",
  description: "this is a test article",
  body: "Test article by a testuser",
};

const invalidData = {
  title: "",
  description: "",
  body: "",
};

const slug = "article-slug";

describe("Edit an article test", () => {
  const store = mockStore();
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
    store.clearActions();
  });

  it("tests that we should be able to update an article", () => {
    fetchMock.patchOnce(`${BASE_URL}/articles/${slug}/`, {
      body: {
        title: "test article",
        description: "this is a test article",
        body: "Test article by a testuser",
      },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedAction = [
      {
        type: ArticleActionTypes.EDIT_ARTICLE_SUCCESS,
        payload: {
          title: "test article",
          description: "this is a test article",
          body: "Test article by a testuser",
        },
      },
    ];

    return store.dispatch(EditArticle(slug, data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("tests what happens when we get an error in updating an article", () => {
    fetchMock.patchOnce(`${BASE_URL}/articles/${slug}/`, {
      body: {
        errors: {
          title: ["This field may not be blank"],
          description: ["This field may not be blank"],
          body: ["This field may not be blank"],
        },
      },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedAction = [
      {
        type: ArticleActionTypes.EDIT_ARTICLE_FALIURE,
        payload: {
          title: ["This field may not be blank"],
          description: ["This field may not be blank"],
          body: ["This field may not be blank"],
        },
      },
    ];
    
    return store.dispatch(EditArticle(slug, invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
