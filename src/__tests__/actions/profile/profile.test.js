import Enzyme from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import EnzymeAdapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  IS_UPDATING, PROFILE_LOADED, UPDATE_SUCCESS,
} from "../../../actions/types";
import { loadProfile, updateProfile } from "../../../actions/profile/profileActions";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.BASE_URL;

let username;
let url;
describe("Profile Action tests", () => {
  const store = mockStore();
  beforeEach(() => {
    username = localStorage.getItem("username00000");
    url = `${API_HOST_URL}/profiles/${username}`;
    store.clearActions();
  });
  afterEach(() => {
    username = "";
    url = "";
    fetchMock.restore();
  });

  it("should load a user profile", () => {
    fetchMock.getOnce(url, {
      body: {
        profile: {
          image:
            "https://m0yfsbokq47e8jxhhbos.jpg",
          bio: "samyy",
          username: "testname",
        },
      },
      headers: { "content-type": "application/json" },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: "PROFILE_LOADING" }, {
      payload: {
        bio: "samyy",
        image: "https://m0yfsbokq47e8jxhhbos.jpg",
        username: "testname",
      },
      type: PROFILE_LOADED,
    }];
    return store.dispatch(loadProfile())
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });

  it("should fail to update a user profile", () => {
    fetchMock.getOnce(url, {
      body: {},
      headers: { "content-type44": "application/json" },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: "PROFILE_LOADING" }, {
      payload: {
        bio: "samyy",
        image: "https://m0yfsbokq47e8jxhhbos.jpg",
        username: "testname",
      },
      type: PROFILE_LOADED,
    }];
    return store
      .dispatch(loadProfile())
      .then(() => expect(store.getActions())
        .not
        .toEqual(expectedActions));
  });

  it("should not update the profile", () => {
    const API_HOST_URL = process.env.BASE_URL;
    localStorage.setItem("username", "crycetruly");
    const username = localStorage.getItem("username");
    const url = `${API_HOST_URL}/profiles/${username}/edit`;
    fetchMock.patchOnce(url, {
      body: {
        msg: "",
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: IS_UPDATING }, {
      payload: undefined,
      type: UPDATE_SUCCESS,
    }];
    return store
      .dispatch(updateProfile("", "", ""))
      .then(() => expect(store.getActions())
        .not.toBe(expectedActions));
  });

  it("should successfully update a profile bio if no image is provided", () => {
    const API_HOST_URL = process.env.BASE_URL;
    localStorage.setItem("username", "crycetruly");
    const username = localStorage.getItem("username");
    const url = `${API_HOST_URL}/profiles/${username}/edit`;
    fetchMock.patchOnce(url, {
      body: {
        profile: {
          username: "crycetruly",
          bio: "My Profile",
          image: null,
        },
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: IS_UPDATING }, {
      payload: {
        username: "crycetruly",
        bio: "My Profile",
        image: null,
      },
      type: UPDATE_SUCCESS,
    }];
    return store
      .dispatch(updateProfile("bio", "My Profile", ""))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
