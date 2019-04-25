const initialState = {
    comments: [],
    comment: {},
    loading: false,
};

  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
        return {
            ...state,
            comments: action.payload,
            loading: false,
        };

    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        isSuccessful: true,
        message: action.payload.message,
        errors: {},
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
  
  export default commentReducer;
