import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileReducer from "./profile/profileReducer";
import resetPasswordReducer from "./resetReducer/resetPasswordReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile: profileReducer,
  resetPasswordReducer,
});
