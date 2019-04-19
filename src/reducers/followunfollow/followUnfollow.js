import {
  FOLLOWING_USER_FAIL, FOLLOWING_USER_STARTED, FOLLOWING_USER_SUCCESS, FOLLOWING_LIST_LOADED, FOLLOWERS_LOADED, FETCHING_FOLLOWING_LIST, FOLLOWING_LIST_LOADED_FAILED,
} from "../../actions/types";

const initialState = {
  followers: [],
  isFollowingSomeone: false,
  msg: null,
  following: [],
  isLoading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
  case FOLLOWING_USER_STARTED:
    return {
      ...state,
      isFollowingSomeone: true,
    };
  case FOLLOWING_USER_SUCCESS:
    return {
      ...state,
      isFollowingSomeone: false,
      msg: action.payload,
    };
  case FOLLOWING_USER_FAIL:
    return {
      ...state,
      isFollowingSomeone: false,
      msg: action.payload,
    };

  case FETCHING_FOLLOWING_LIST:
    return {
      ...state,
      isLoading: true,

    };
  case FOLLOWING_LIST_LOADED:
    return {
      ...state,
      following: action.payload,

    };
  case FOLLOWING_LIST_LOADED_FAILED:
    return {
      ...state,
      isFollowingSomeone: false,
      msg: action.payload,
      isLoading: false,

    };
  case FOLLOWERS_LOADED:
    return {
      ...state,
      followers: action.payload,
    };
  default:
    return state;
  }
}
