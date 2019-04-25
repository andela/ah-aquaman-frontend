import commentReducer from "../../../reducers/commentReducers";

describe("Fetch comment reducer test", () => {

    it("should fetch all article comments", () => {
        const action = {
            type: "GET_COMMENTS",
            payload: {
                comments: [],
            }
        }
        const expected = {
            comments: {
                comments: [],
            },
            loading: false,
        }
        expect(commentReducer({}, action)).toEqual(expected);
    });

    it("", () => {
        const action = {
            type: "ADD_COMMENT_SUCCESS",
            payload: {
                token: "sdcvdscdsc",
                isSuccessful: true,
                message: {},
                errors: {},
            }
        }
        const expected = {
            errors: {},
            token: "sdcvdscdsc",
            message: {},
            isSuccessful: true,
        }
        expect(commentReducer({}, action)).toEqual(expected);
    });
});
