import { ArticleActionTypes } from "../../../../actions/types";
import fetchArticlesReducer from "../../../../reducers/fetchArticleReducer";

describe("Fetch article reducer test", () => {
  it("should fetch articles", () => {
    const initialState = {
      articles: [],
    };
    const action = {
      type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
      payload: { title: "title", description: "description", body: "body" },
    };

    const expected = {
      ...initialState,
      articles: { title: "title", description: "description", body: "body" },
    };

    const newState = fetchArticlesReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it("should return an initial state", () => {
    const initialState = {
      articles: [],
    };
    const reducer = fetchArticlesReducer(initialState, {});
    expect(reducer).toEqual(initialState);
  });
});
