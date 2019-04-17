import { ArticleActionTypes } from "../../types";

const userToken = localStorage.getItem("token");
const { BASE_URL } = process.env;

export const CreateArticle = payload => dispatch => fetch(`${BASE_URL}/articles/`, {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    Authorization: `Bearer ${userToken}`,
    "content-type": "application/json",
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.errors) {
        dispatch({
          type: ArticleActionTypes.CREATE_ARTICLE_FALIURE,
          payload: data.errors,
        });
      } else {
        dispatch({
          type: ArticleActionTypes.CREATE_ARTICLE_SUCCESS,
          payload: data,
        });
      }
    },
  );

export const EditArticle = (slug, payload) => dispatch => fetch(`${BASE_URL}/articles/${slug}/`, {
  method: "PATCH",
  body: JSON.stringify(payload),
  headers: {
    Authorization: `Bearer ${userToken}`,
    "content-type": "application/json",
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.errors) {
        dispatch({
          type: ArticleActionTypes.EDIT_ARTICLE_FALIURE,
          payload: data.errors,
        });
      } else {
        dispatch({
          type: ArticleActionTypes.EDIT_ARTICLE_SUCCESS,
          payload: data,
        });
      }
    },
  );

export const DeleteArticle = slug => dispatch => fetch(`${BASE_URL}/articles/${slug}/`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.article === "Article has been deleted") {
        dispatch({
          type: ArticleActionTypes.DELETE_ARTICLE_SUCCESS,
          payload: data.article,
        });
      }
    },
  );
