import { RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from "../types";

const { BASE_URL } = process.env;
const changePasswordAction = (newPassword, token) => dispatch => fetch(`${BASE_URL}/users/reset-password/change/?token=${token}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ password: newPassword }),

})
  .then(res => res.json())
  .then((data) => { 
    if (data.error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: data.error,   
      });
    } else {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: data.message,
      });
    }
  });
    
export default changePasswordAction;
