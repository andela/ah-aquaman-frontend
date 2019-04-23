import {TAGS_LOADED,TAGS_LOADING} from "../../actions/types";

const initialState = {
    tags: [],
    isLoading: false
  };

export default function (state = initialState, action) {
    switch (action.type) {
    case TAGS_LOADED:
      return {
        ...state,
        tags: action.payload,
        isLoading: false,
      };
    case TAGS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
    }
  }
