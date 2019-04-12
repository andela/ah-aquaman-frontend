const initialState = {
  message: "",
  errors: {},
  isSuccessful: false,
  token: "",
  loading: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
  case "REGISTER_SUCCESS":
    return {
      ...state,
      token: action.payload.token,
      isSuccessful: true,
      message: action.payload.message,
      errors: {},
    };
  case "REGISTER_FAILURE":
    return {
      ...state,
      errors: action.payload,
      isSuccessful: false,
      loading: false,
    };
  case "LOADING":
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};

export default signupReducer;
