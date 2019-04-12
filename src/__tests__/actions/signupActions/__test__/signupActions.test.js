import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import signupAction from "../../../../actions/signupAction";
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const signupUrl = `${BASE_URL}/users/`;

describe("signup actions", () => {
  const store = mockStore();
  afterEach(() => {
    fetchMock.restore();
  });

  it("handles REGISTER_SUCCESS action after signing up", () => {
    fetchMock.postOnce(signupUrl, {
      body: { user: { token: "abdjakbd3jkbhdkkb3hjkbjdbjdjj" } },
      headers: { "content-type": "application/json" },
    });

    const expectedAction = [{
      type: REGISTER_SUCCESS,
      payload: {
        token: "abdjakbd3jkbhdkkb3hjkbjdbjdjj",
        message: "you have successfully registered",
      },
    }];

    const validData = {
      username: "testuser1234",
      email: "testuser1234@gmail.com",
      password: "password1234",
    };

    return store.dispatch(signupAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });


it("handles REGISTER_FAILURE action after signing up", () => {
  const store = mockStore();
  fetchMock.postOnce(signupUrl, {
    body: { errors: {} },
    headers: { "content-type": "application/json" },
  });

  const expectedAction = [{
    type: REGISTER_FAILURE,
    payload: {},
  }];

  const invalidData = {
    email: "",
    password: "",
  };

  return store.dispatch(signupAction(invalidData)).then(() => {
    expect(store.getActions()).toEqual(expectedAction);
  });
});});