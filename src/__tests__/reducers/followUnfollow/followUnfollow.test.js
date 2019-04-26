import {
  FOLLOWING_USER_STARTED, FOLLOWING_USER_SUCCESS, FOLLOWING_USER_FAIL, 
  FETCHING_FOLLOWING_LIST, FOLLOWING_LIST_LOADED, FOLLOWING_LIST_LOADED_FAILED, FOLLOWERS_LOADED,
} from "../../../actions/types";
import followUnfollow from "../../../reducers/followunfollow/followUnfollow";

describe("Follow Unfollow Reducer Tests", () => {
  const initialState = {
    followers: [],
    isFollowingSomeone: false,
    msg: null,
    following: [],
    isLoading: false,
  };

  it("should return the initial state", () => {
    const state = followUnfollow(undefined, {});
    expect(state).toEqual({
      followers: [],
      isFollowingSomeone: false,
      msg: null,
      following: [],
      isLoading: false,
    });
  });

  it("should handle the FOLLOWING_USER_STARTED action", () => {
    const action = {
      type: FOLLOWING_USER_STARTED,
    };
    const loadedState = {
      followers: [],
      isFollowingSomeone: true,
      msg: null,
      following: [],
      isLoading: false,
    };
    expect(followUnfollow(initialState, action)).toEqual(loadedState);
  });

  it("should follow a user successfully", () => {
    const dispatchedAction = {
      type: FOLLOWING_USER_SUCCESS,
      payload: "Successfully followed this user",
    };
    const newState = {
      followers: [],
      isFollowingSomeone: false,
      msg: "Successfully followed this user",
      following: [],
      isLoading: false,
    };
    expect(followUnfollow(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should fail to follow a user", () => {
    const dispatchedAction = {
      type: FOLLOWING_USER_FAIL,
      payload: "You cannot follow your own profile",
    };
    const newState = {
      followers: [],
      isFollowingSomeone: false,
      msg: "You cannot follow your own profile",
      following: [],
      isLoading: false,
    };
    expect(followUnfollow(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should load when fetching followers", () => {
    const action = {
      type: FETCHING_FOLLOWING_LIST,
    };
    const expectedState = {
      followers: [],
      isFollowingSomeone: false,
      msg: null,
      following: [],
      isLoading: true,
    };
    expect(followUnfollow(initialState, action)).toEqual(expectedState);
  });

  it("should Load a users following list", () => {
    const successAction = {
      type: FOLLOWING_LIST_LOADED,
      payload: [{
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      }],
    };

    const successState = {
      isFollowingSomeone: false,
      msg: null,
      following: [{
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      }],
      isLoading: false,
      followers: [],
    };
    expect(followUnfollow(initialState, successAction)).toEqual(successState);
  });

  it("should fail to Load a users following list", () => {
    const successAction = {
      type: FOLLOWING_LIST_LOADED_FAILED,
      payload: "Something went wrong while loading following list",
    };

    const successState = {
      followers: [],
      isFollowingSomeone: false,
      msg: "Something went wrong while loading following list",
      following: [],
      isLoading: false,
    };
    expect(followUnfollow(initialState, successAction)).toEqual(successState);
  });

  it("should Load a users followers list", () => {
    const successAction = {
      type: FOLLOWERS_LOADED,
      payload: [{
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      }],
    };

    const successState = {
      isFollowingSomeone: false,
      msg: null,
      followers: [{
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      }],
      isLoading: false,
      following: [],
    };
    expect(followUnfollow(initialState, successAction)).toEqual(successState);
  });
});
