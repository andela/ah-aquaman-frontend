import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../../../actions/types";
import loginReducer from "../../../../reducers/loginReducer";

describe("loginReducer", () => {
  const initialState = {
    isSuccessful: false,
    token: "",
    errors: null,
  };
  
  it("should handle LOGIN_SUCCESS", () => {
    const successAction = {
      type: LOGIN_SUCCESS,
      payload: "567htyud87564shh",
    };
  
    const successState = {
      isSuccessful: true,
      token: "567htyud87564shh",
      errors: null,
    };
  
    expect(loginReducer(initialState, successAction)).toEqual(successState);
  });
  it("should handle LOGIN_FAIL", () => {
    const failureAction = {
      type: LOGIN_FAIL,
      payload: {},
    };
  
    const failureState = {
      isSuccessful: false,
      token: "",
      errors: {},
    };
    expect(loginReducer(initialState, failureAction)).toEqual(failureState);
  });
  it("should return the initial state", () => {
    const undefinedAction = {
      type: "",
      payload: {},
    };
  
    expect(loginReducer(initialState, undefinedAction)).toEqual(initialState);
  });
});
