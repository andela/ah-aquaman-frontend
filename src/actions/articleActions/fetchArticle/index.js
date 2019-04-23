import { ArticleActionTypes } from "../../types";

const { BASE_URL } = process.env;

const fetchArticlesAction = () => dispatch => fetch(`${BASE_URL}/articles/`,
  {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
  .then(res => res.json())
  .then((data) => {
    dispatch({
      type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
      payload: data.articles,
    });
  });
export default fetchArticlesAction;
