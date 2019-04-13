import { toast } from "react-toastify";
import { ArticleActionTypes } from "../../types";

const userToken = localStorage.getItem("token");
const { BASE_URL } = process.env;

const RateAction = (rate, article) => dispatch => fetch(`${BASE_URL}/articles/${article.slug}/rate/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${userToken}`,
    "content-type": "application/json",
  },
  body: JSON.stringify({ score: Number.parseFloat(rate) }),
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.article.message) {
        toast.error(data.article.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      } else {
        const articledata = {
          ...article,
          user_rating: data.article.score,
        };

        dispatch({
          type: ArticleActionTypes.ARTICLE_FETCH_SUCCESSFUL,
          payload: articledata,
        });

        toast.success("You have rated this article successfully.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      }
    },
  );

export default RateAction;
