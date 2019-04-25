const { BASE_URL } = process.env;

export const getComments = (slug) => dispatch => {
    return fetch(`${BASE_URL}/${slug}/comments/`,{
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization":`Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then(res => res.json())
    .then(data =>  {
        dispatch({
            type: "GET_COMMENTS",
            payload: data.comments,
        });
      }  )

    .catch(err =>
        dispatch({
            type: "GET_COMMENTS",
            payload: null,
        })
    );
};

export const addComment = (slug, commentData) => (dispatch) => {
    return fetch(`${BASE_URL}/${slug}/comments/`,
    {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization":`Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({body: commentData})
    })
    .then(res => res.json())
    .then(data =>  {
        dispatch({
            type: "ADD_COMMENT_SUCCESS",
            payload: data.comment,
        });
        document.location.reload();
    }
        )
    .catch(err =>
        dispatch({
            type: "ADD_COMMENT_FAIL",
            payload: null,
        })
    );
};
