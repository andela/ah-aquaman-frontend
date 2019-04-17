import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from "../../../../actions/types";
import resetPasswordReducer from "../../../../reducers/resetReducer/resetPasswordReducer";

describe("resetReducers", () => {
  it("should return empty initial state", () => {
    const initialState = resetPasswordReducer(undefined, {});
    expect(initialState).toEqual({});
  });

  it("should handle successful password reset", () => {
    const initialState = {
      message: "",
    };
     
    const expected = {
      ...initialState,
      message: "message",
    };
    const action = {
      type: RESET_PASSWORD_SUCCESS,
      payload: "message",
    };
    const newState = resetPasswordReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it("should handle failed password reset", () => {
    const initialState = {
      detail: "",
    };
   
    const expected = {
      ...initialState,
      detail: "error message",
    };
    
    const action = {
      type: RESET_PASSWORD_FAIL,
      payload: "error message",
    };
    const newState = resetPasswordReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
