import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

const { BASE_URL } = process.env;
const loginAction = loginData => dispatch => fetch(`${BASE_URL}/users/login/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(loginData),
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
  }).catch(err => err);


export default loginAction;
