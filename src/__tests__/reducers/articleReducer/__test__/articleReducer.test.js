import ArticleReducer from "../../../../reducers/articleReducer";
import { ArticleActionTypes } from "../../../../actions/types";

describe("ArticleReducer test", () => {
  it("should return correct state for successful article fetch action", () => {
    const expectedState = {
      article: {},
      loading: false,
    };

    const action = {
      type: ArticleActionTypes.ARTICLE_FETCH_SUCCESSFUL,
      payload: {},
    };

    expect(ArticleReducer({}, action)).toEqual(expectedState);
  });

  it("should return Article not found action action", () => {
    const expectedState = {
      loading: false,
    };

    const action = {
      type: ArticleActionTypes.ARTICLE_FETCH_NOT_FOUND,
      payload: null,
    };

    expect(ArticleReducer({}, action)).toEqual(expectedState);
  });

  it("should return for no action", () => {
    const expectedState = {};

    const action = {
      type: "INVALID",
      payload: {},
    };
    
    expect(ArticleReducer({}, action)).toEqual(expectedState);
  });
});
