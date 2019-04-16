import { RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from "../../actions/types";

const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
  case RESET_PASSWORD_SUCCESS:
    return {
      ...state,
      message: action.payload,
    };
  case RESET_PASSWORD_FAIL:
    return {
      ...state,
      detail: action.payload,
    };
  default:
    return state;
  }
}; 

export default resetPasswordReducer;
