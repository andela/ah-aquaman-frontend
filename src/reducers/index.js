import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileReducer from "./profile/profileReducer";

export default combineReducers({
  loginReducer,
  signupReducer,
  profile: profileReducer,
});
