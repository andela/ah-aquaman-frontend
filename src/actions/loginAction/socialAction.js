import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

const { BASE_URL } = process.env;

const socialAction = (socialData, type) => dispatch => fetch(`${BASE_URL}/social/auth/${type}/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ user: { auth_token: socialData } }),
})
  .then(response => response.json())
  .then((data) => {
    if (data.errors) {
      dispatch({
        type: LOGIN_FAIL,
        payload: data.errors,
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.user.token,
      });
    }
  });

export default socialAction;
