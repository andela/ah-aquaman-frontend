import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import resetPasswordAction from "../../../../actions/resetAction/resetPasswordActions";
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;
const resetUrl = `${BASE_URL}/users/reset-password/`;

describe("reset password action", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("handles successful password reset", () => {
    fetchMock.postOnce(resetUrl, {
      body: { message: "Please check your email for the reset password link." },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [{
      type: RESET_PASSWORD_SUCCESS,
      payload: "Please check your email for the reset password link.",
    }];

    const validData = {
      email: "peaceapple@gmail.com",
    };
    return store.dispatch(resetPasswordAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles failed password reset", () => {
    fetchMock.postOnce(resetUrl, {
      body: {
        detail: "Not found.",
      },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [{
      type: RESET_PASSWORD_FAIL,
      payload: "Not found.", 
    }];

    const invalidData = {
      email: "apple.com",
    };
    return store.dispatch(resetPasswordAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
