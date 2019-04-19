import Enzyme from "enzyme";
import configureMockStore from "redux-mock-store";
import EnzymeAdapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {TAGS_LOADING, TAGS_LOADED,} from "../../../actions/types";
import { getTags } from "../../../actions/tags/tags";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.BASE_URL;

let url;
describe("tags Action tests", () => {
  const store = mockStore();
  beforeEach(() => {
    url = `${API_HOST_URL}/tags/`;
    store.clearActions();
  });
  afterEach(() => {
    url = "";
    fetchMock.restore();
  });

  it("should load all tags", () => {
    fetchMock.getOnce(url, {
      body: {
            "tags": []
      },
      headers: { "content-type": "application/json" },
    }, { overwriteRoutes: false });
    const expectedActions = [{ type: TAGS_LOADING }, {
      payload:
       [],
      type: TAGS_LOADED,
    }];
    return store.dispatch(getTags())
      .then(() => expect(store.getActions())
        .toEqual(expectedActions));
  });
})
