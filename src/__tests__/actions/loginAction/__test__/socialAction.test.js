import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import socialAction from "../../../../actions/loginAction/socialAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const facebookUrl = `${BASE_URL}/social/auth/facebook/`;

describe("Tests facebook actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("handles LOGIN_SUCCESS action after logging in facebook", () => {
    fetchMock.postOnce(facebookUrl, {
      body: { user: { auth_token: "token" } },
      headers: { "content-type": "application/json" },
    });

    const store = mockStore();
    store.dispatch(socialAction({ accessToken: "token" }, "facebook"));
    expect(store.getActions()).toEqual([]); 
  });

  it("handles LOGIN_FAIL action after logging in facebook", () => {
    fetchMock.postOnce(facebookUrl, {
      body: { errors: {} },
      headers: { "content-type": "application/json" },
    });

    const store = mockStore();
    store.dispatch(socialAction({ access: "token" }, "facebook"));
    expect(store.getActions()).toEqual([]); 
  });
});
