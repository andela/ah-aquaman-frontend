import {
  PROFILE_LOADING,
  PROFILE_LOADED,
  PROFILE_LOAD_FAILED,
  GET_PROFILE, UPDATE_FAILED, IS_UPDATING, UPDATE_SUCCESS,
} from "../../actions/types";
import loginReducer from "../../reducers/loginReducer";
import profileReducer from "../../reducers/profile/profileReducer";

test("initial profiles", () => {
  const state = profileReducer(undefined, {});
  expect(state).toEqual({
    profile: null, isLoading: null, msg: null, isUpdating: null,
  });
});

describe("loginReducer Tests", () => {
  const initialState = {
    profile: null,
    isLoading: null,
    msg: null,
    isUpdating: null,
  };

  it("should Load a user profile", () => {
    const successAction = {
      type: PROFILE_LOADED,
      payload: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
      isLoading: null,
      msg: null,
      isUpdating: null,
    };

    const successState = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
      isLoading: null,
      msg: null,
      isUpdating: null,
    };
    expect(profileReducer(initialState, successAction)).toEqual(successState);
  });

  it("should fail to load a users profile", () => {
    const dispatchedAction = {
      type: PROFILE_LOAD_FAILED,
      payload: "something went wrong",
    };
    const newState = {
      profile: null,
      isLoading: null,
      msg: "something went wrong",
      isUpdating: null,
    };
    expect(profileReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should fail to update a users profile", () => {
    const dispatchedAction = {
      type: UPDATE_FAILED,
      payload: "Profile Update Failed",
    };
    const newState = {
      profile: null,
      isLoading: null,
      msg: "Profile Update Failed",
      isUpdating: null,
    };
    expect(profileReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should handle Nofify user of the profile loading status", () => {
    const loadingAction = {
      type: PROFILE_LOADING,
    };
    const profileLoadingAction = {
      profile: null,
      msg: null,
      isLoading: true,
      isUpdating: null,
    };
    expect(profileReducer(initialState, loadingAction)).toEqual(profileLoadingAction);
  });

  it("should handle Nofify user after the profile update", () => {
    const action = {
      type: IS_UPDATING,
    };
    const profileUpdatingAction = {
      profile: null,
      msg: null,
      isLoading: null,
      isUpdating: true,
    };
    expect(profileReducer(initialState, action)).toEqual(profileUpdatingAction);
  });

  it("should get a users new profile", () => {
    const dispachedAction = {
      type: GET_PROFILE,
      payload: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
      isLoading: null,
      msg: null,
      isUpdating: null,
    };

    const newProfileState = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
      isLoading: null,
      msg: null,
      isUpdating: null,
    };
    expect(profileReducer(initialState, dispachedAction)).toEqual(newProfileState);
  });
  
  it("should successfully update a users profile", () => {
    const dispachedAction = {
      type: UPDATE_SUCCESS,
      payload: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
    };
    const newProfileState = {
      profile: {
        username: "crycetruly",
        email: "crycetruly@gmail.com",
        bio: "this is the bio",
        image: "testimage",
      },
      isLoading: null,
      msg: null,
      isUpdating: null,
    };

    expect(profileReducer(initialState, dispachedAction)).toEqual(newProfileState);
  });
});
