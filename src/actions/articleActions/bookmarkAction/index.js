import {
  BOOKMARK_SUCCESS, BOOKMARK_FAIL, UNBOOKMARK_SUCCESS,
  BOOKMARK_LIST_FETCHED, 
} from "../../types";

const token = localStorage.getItem("token");
const { BASE_URL } = process.env;

export const bookmarkArticleAction = (slug, state) => dispatch => fetch(`${BASE_URL}/articles/${slug}/bookmark/`, {
  
  method: state ? "DELETE" : "POST",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then(res => res.json())
  .then((data) => {
    if (data.error) {
      dispatch({
        type: BOOKMARK_FAIL,
        payload: data.error,
      });
    } else if (state) {
      dispatch({
        type: UNBOOKMARK_SUCCESS,
        payload: data.message,
      });
    } else {
      dispatch({
        type: BOOKMARK_SUCCESS,
        payload: data.message,
      });
    }
  });

export const bookmarkListing = slug => dispatch => fetch(`${BASE_URL}/bookmarks/`, {
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
}).then(response => response.json())
  .then((data) => {
    if (data) {
      dispatch({
        type: BOOKMARK_LIST_FETCHED,
        payload: data,
        slug,
      });
    } 
  });
