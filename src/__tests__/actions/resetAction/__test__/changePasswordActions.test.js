import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import changePasswordAction from "../../../../actions/resetAction/changePasswordActions";
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { BASE_URL } = process.env;

describe("change password action", () => {
  let token;
  let changeUrl;
  let store;

  beforeEach(() => {
    token = "oiokcvhbjkbihjbjk";
    changeUrl = `${BASE_URL}/users/reset-password/change/?token=${token}`;
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("handles successful password change", () => {
    fetchMock.patchOnce(changeUrl, {
      body: { message: "you have reset your password successfully." },
      headers: {
        "content-type": "application/json", 
        Authorization: `Bearer ${token}`, 
      },
    });

    const expectedActions = [{
      type: RESET_PASSWORD_SUCCESS,
      payload: "you have reset your password successfully.",
    }];

    const validData = {
      password: "nevergiveup",
    };
    return store.dispatch(changePasswordAction(validData, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles failed password change", () => {
    fetchMock.patchOnce(changeUrl, {
      body: { error: "password should be atleast 8 characters." },
      headers: { 
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const expectedActions = [{
      type: RESET_PASSWORD_FAIL,
      payload: "password should be atleast 8 characters.",
    }];

    const invalidData = {
      password: "qwerty",
    };
    return store.dispatch(changePasswordAction(invalidData, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
