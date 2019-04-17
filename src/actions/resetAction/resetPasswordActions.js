import { RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from "../types";

const { BASE_URL } = process.env;
const resetPasswordAction = email => dispatch => fetch(`${BASE_URL}/users/reset-password/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ email }),

})
  .then(res => res.json())
  .then((data) => {
    if (data.detail) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: data.detail,
      });
    } else {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data.message,
      });
    }
  });
    
export default resetPasswordAction;
