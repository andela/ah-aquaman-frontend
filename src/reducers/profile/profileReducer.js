import {
  PROFILE_LOADING, GET_PROFILE,
  PROFILE_LOADED, PROFILE_LOAD_FAILED, IS_UPDATING, UPDATE_SUCCESS, UPDATE_FAILED,
} from "../../actions/types";

const initialState = {
  profile: null,
  isLoading: null,
  msg: null,
  isUpdating: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
  case PROFILE_LOADED:
    return {
      ...state,
      profile: action.payload,
      isLoading: null,
      isUpdating: null,
    };
  case UPDATE_SUCCESS:
    return {
      ...state,
      isLoading: null,
      isUpdating: null,
      profile: action.payload,
    };
  case UPDATE_FAILED:
    return {
      ...state,
      msg: action.payload,
      isLoading: null,
      isUpdating: null,
    };
  case GET_PROFILE:
    return {
      ...state,
      profile: action.payload,
    };
  case PROFILE_LOADING:
    return {
      ...state,
      isLoading: true,
      isUpdating: null,
    };
  case PROFILE_LOAD_FAILED:
    return {
      ...state,
      msg: action.payload,
    };
  case IS_UPDATING:
    return {
      ...state,
      isUpdating: true,
    };
  default:
    return state;
  }
}
