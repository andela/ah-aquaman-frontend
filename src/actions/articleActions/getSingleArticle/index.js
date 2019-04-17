import { ArticleActionTypes } from "../../types";

const { BASE_URL } = process.env;
const getSingleArticle = slug => (dispatch) => {
  let statusCode;
  const token = localStorage.getItem("token");
  const headers = token ? { headers: { Authorization: ` Bearer ${token}` } } : {};
  return fetch(
    `${BASE_URL}/articles/${slug}`,
    headers,
  ).then((res) => {
    const { status } = res;
    statusCode = status;
    return res.json();
  })
    .then((data) => {
      if (statusCode === 404) {
        dispatch({
          type: ArticleActionTypes.ARTICLE_FETCH_NOT_FOUND,
          payload: null,
        });
      } else {
        localStorage.setItem("article", JSON.stringify(data));
        dispatch({
          type: ArticleActionTypes.ARTICLE_FETCH_SUCCESSFUL,
          payload: data,
        });
      }
    });
};
export default getSingleArticle;
