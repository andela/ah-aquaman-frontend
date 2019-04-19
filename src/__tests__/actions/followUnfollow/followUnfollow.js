import Enzyme from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import EnzymeAdapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  FOLLOWING_USER_STARTED, FOLLOWING_USER_SUCCESS, FETCHING_FOLLOWING_LIST, UNFOLLOWING_USER_SUCCESS,
  FOLLOWERS_LOADED, FOLLOWING_LIST_LOADED,
} from "../../../actions/types";
import {
  followUser, getUserfollowers, getUserfollowing, unFollowUser,
} from "../../../actions/followUnfollow/followUnfollow";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Follow Unfollow Action tests", () => {
  const store = mockStore();
  const username = "";

  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
    store.clearActions();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("should allow a user to successfully follow another user", () => {
    fetchMock.postOnce("https://ah-backend-aquaman-staging.herokuapp.com/api/profiles/username/follows/", {
      body: {
        profile: {
          message: "Successfuly followed aacryce",
        },
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: FOLLOWING_USER_STARTED }, {
      payload: {
        message: "Successfuly followed aacryce",
      },
      type: FOLLOWING_USER_SUCCESS,
    }];
    return store.dispatch(followUser("username"))
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });

  it("should allow a user to successfully unfollow another user", () => {
    fetchMock.deleteOnce("https://ah-backend-aquaman-staging.herokuapp.com/api/profiles/username/follows/", {
      body: {
        profile: {
          message: `You have successfully unfollowed ${username}.`,
        },
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: FOLLOWING_USER_STARTED }, {
      payload: {
        message: `You have successfully unfollowed ${username}.`,
      },
      type: UNFOLLOWING_USER_SUCCESS,
    }];
    return store.dispatch(unFollowUser("username"))
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });

  it("should load all the user`s followers", () => {
    fetchMock.getOnce("https://ah-backend-aquaman-staging.herokuapp.com/api/profiles/test/followers/", {
      body: {
        profile: [],
      },
      headers: { "content-type": "application/json" },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: FETCHING_FOLLOWING_LIST }, {
      payload:
        [],
      type: FOLLOWERS_LOADED,
    }];
    return store.dispatch(getUserfollowers("test"))
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });

  it("should load the user`s following list", () => {
    fetchMock.getOnce("https://ah-backend-aquaman-staging.herokuapp.com/api/profiles/test/follows/", {
      body: {
        profile: [],
      },
      headers: { "content-type": "application/json" },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: FETCHING_FOLLOWING_LIST }, {
      payload:
       [],
      type: FOLLOWING_LIST_LOADED,
    }];
    return store.dispatch(getUserfollowing("test"))
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });
});
