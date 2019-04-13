import articleCreateReducer from "../../../../reducers/articleCreateReducer";
import { ArticleActionTypes } from "../../../../actions/types";

describe("articleCreateReducer test", () => {
  it("should return the inital state", () => {
    const initalState = {};
    expect(articleCreateReducer(initalState, {})).toEqual({});
  });

  it("should return for create article success action", () => {
    const expectedState = {
      article: {},
      isSuccessful: true,
    };
    const action = {
      type: ArticleActionTypes.CREATE_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleCreateReducer({}, action)).toEqual(expectedState);
  });

  it("should return create article failure action", () => {
    const expectedState = {
      errors: {},
      isSuccessful: false,
    };
    const action = {
      type: ArticleActionTypes.CREATE_ARTICLE_FALIURE,
      payload: {},
    };
    expect(articleCreateReducer({}, action)).toEqual(expectedState);
  });

  it("should return edit article success action", () => {
    const expectedState = {
      article: {},
      isEditSuccessful: true,
    };
    const action = {
      type: ArticleActionTypes.EDIT_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleCreateReducer({}, action)).toEqual(expectedState);
  });

  it("should return on article edit failure action", () => {
    const expectedState = {
      errors: {},
      isEditSuccessful: false,
    };
    const action = {
      type: ArticleActionTypes.EDIT_ARTICLE_FALIURE,
      payload: {},
    };
    expect(articleCreateReducer({}, action)).toEqual(expectedState);
  });

  it("should return on delete article action", () => {
    const expectedState = {
      message: {},
      isArticleDeleted: true,
    };
    const action = {
      type: ArticleActionTypes.DELETE_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleCreateReducer({}, action)).toEqual(expectedState);
  });
});
