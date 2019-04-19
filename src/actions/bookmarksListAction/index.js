import {ArticleActionTypes} from "../types";

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

const bookmarkList = slug => dispatch => fetch(`${BASE_URL}/bookmarks/`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
}).then(response => response.json())
  .then((data) => {
    if (data) {
      dispatch({
        type: ArticleActionTypes.FETCH_BOOKMARKS_SUCCESS,
        payload: data,
        slug,
      });
    } else {
      dispatch({
        type: ArticleActionTypes.FETCH_BOOKMARKS_FALIURE,
        payload: 'You do not have any articles bookmarked',
      });
    }
  });

export default bookmarkList;
