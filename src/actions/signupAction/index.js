import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../types";

const { BASE_URL } = process.env;
const signupAction = signupData => dispatch => fetch(`${BASE_URL}/users/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(signupData),
})
  .then(response => response.json())
  .then((data) => {
    if (data.errors) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: data.errors,
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          token: data.user.token,
          message: "you have successfully registered",
        },
      });
    }
  });


export default signupAction;
