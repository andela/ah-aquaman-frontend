import { TAGS_LOADING, TAGS_LOADED } from "../types";

const BASE_URL = process.env.BASE_URL;
export const getTags = () => (dispatch) => {
  dispatch({
    type: TAGS_LOADING,
  });
  return fetch(`${BASE_URL}/tags/`)
    .then(res => res.json())
    .then((res) => {
      dispatch({
        type: TAGS_LOADED,
        payload: res.tags,
      });
    });
};
