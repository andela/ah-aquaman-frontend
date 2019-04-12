import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import loginAction from "../../../../actions/loginAction";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const loginUrl = `${BASE_URL}/users/login/`;

describe("login actions", () => {
  const store = mockStore();

  afterEach(() => {
    fetchMock.restore();
  });

  beforeEach(() => {
    store.clearActions();
  });
  
  it("handles LOGIN_SUCCESS action after logging in", () => {
    fetchMock.postOnce(loginUrl, {
      body: { user: { token: "abdjakbd3jkbhdkkb3hjkbjdbjdjj" } },
      headers: { "content-type": "application/json" },
    });

    const expectedAction = [{
      type: LOGIN_SUCCESS,
      payload: "abdjakbd3jkbhdkkb3hjkbjdbjdjj",
    }];

    const validData = {
      email: "testuser@gmail.com",
      password: "testing123",
    };

    const store = mockStore();
    
    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("handles LOGIN_FAIL action after logging in", () => {
    fetchMock.postOnce(loginUrl, {
      body: { errors: {} },
      headers: { "content-type": "application/json" },
    });

    const expectedAction = [{
      type: LOGIN_FAIL,
      payload: {},
    }];

    const invalidData = {
      email: "",
      password: "",
    };

    const store = mockStore();

    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("catches error instances", () => {
    fetchMock.postOnce(loginUrl, {
      body: undefined,
      headers: { "content-type": "application/json" },
    });

    const expectedAction = [];

    const validData = {
      email: "user@user.com",
      password: "N0vember",
    };

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
