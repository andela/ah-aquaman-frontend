import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import RateAction from "../../../actions/articleActions/rateActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const { BASE_URL } = process.env;
localStorage.setItem("username", "crycetruly");

describe("Rate action tests", () => {
  it("rate article successfully", () => {
    fetchMock.postOnce(`${BASE_URL}/articles/article-slug/rate/`, {
      body: {
        article: { score: 3.0 },
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });


    const store = mockStore();
    return store.dispatch(RateAction(3.0, { slug: "article-slug" }));
  });

  it("rate article on failure", () => {
    fetchMock.post(`${BASE_URL}/articles/article-slug-2/rate/`, {
      body: {
        article: { score: "dsdcsd" },
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const store = mockStore();
    return store.dispatch(RateAction("sds", { slug: "article-slug-2" }));
  });
});