import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../../../../actions/types";
import signupReducer from "../../../../reducers/signupReducer";

describe("signupReducer", () => {
  const initialState = {
    message: "",
    errors: {},
    isSuccessful: false,
    token: "",
    loading: false,
  };
  
  it("should handle REGISTER_SUCCESS", () => {
    const successAction = {
      type: REGISTER_SUCCESS,
      payload: {
        token: "567htyud87564shh",
        message: "you have successfully registered",
      },
    };
  
    const successState = {
      token: "567htyud87564shh",
      isSuccessful: true,
      message: "you have successfully registered",
      errors: {},
      loading: false,
    };
  
    expect(signupReducer(initialState, successAction)).toEqual(successState);
  });

  it("should handle REGISTER_FAILURE", () => {
    const failureAction = {
      type: REGISTER_FAILURE,
      payload: {},
    };
  
    const failureState = {
      isSuccessful: false,
      errors: {},
      loading: false,
      message: "",
      token: "",
    };
    expect(signupReducer(initialState, failureAction)).toEqual(failureState);
  });

  it("should handle LOADING", () => {
    const failureAction = {
      type: "LOADING",
      payload: {},
    };
  
    const failureState = {
      loading: true,
      errors: {},
      isSuccessful: false,
      message: "",
      token: "",
    };
    expect(signupReducer(initialState, failureAction)).toEqual(failureState);
  });
});
