import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import { CreateArticle } from "../../../../actions/articleActions/createArticle";
import { ArticleActionTypes } from "../../../../actions/types";

const middlewarse = [thunk];
const mockStore = configureStore(middlewarse);

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

describe("create articles test", () => {
  const store = mockStore();

  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
    store.clearActions();
  });

  it("tests create an article", () => {
    fetchMock.postOnce(`${BASE_URL}/articles/`, {
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
        type: ArticleActionTypes.CREATE_ARTICLE_SUCCESS,
        payload: {
          title: "test article",
          description: "this is a test article",
          body: "Test article by a testuser",
        },
      },
    ];

    return store.dispatch(CreateArticle(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("tests error when an article is not created", () => {
    fetchMock.postOnce(`${BASE_URL}/articles/`, {
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
        type: ArticleActionTypes.CREATE_ARTICLE_FALIURE,
        payload: {
          title: ["This field may not be blank"],
          description: ["This field may not be blank"],
          body: ["This field may not be blank"],
        },
      },
    ];
    
    return store.dispatch(CreateArticle(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
