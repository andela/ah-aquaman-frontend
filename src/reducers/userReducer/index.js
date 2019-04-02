import actionTypes from "../../actions/types";

const initialState = {
  testMessage: "Authors haven test",
  
};
const user = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return state;

  default:
    return state;
  }
};
  
export default user;
