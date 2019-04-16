import { toast } from "react-toastify";
import {
  UPDATE_SUCCESS, UPDATE_FAILED, PROFILE_LOADING, IS_UPDATING, PROFILE_LOADED, PROFILE_LOAD_FAILED,
} from "../types";

const BASE_URL = process.env.BASE_URL;
export const loadProfile = () => (dispatch) => {
  dispatch({
    type: PROFILE_LOADING,
  });
  return fetch(`${BASE_URL}/profiles/${localStorage.getItem("username")}`)
    .then(res => res.json())
    .then((res) => {
      if (res.profile) {
        dispatch({
          type: PROFILE_LOADED,
          payload: res.profile,
        });
      } else {
        dispatch({
          type: PROFILE_LOAD_FAILED,
          payload: res.errors,
        });
      }
    });
};

export const updateProfile = (bio, type, history) => (dispatch) => {
  dispatch({
    type: IS_UPDATING,
  });

  const body = type === "bio" ? JSON.stringify(bio) : JSON.stringify({ image: bio });
  return fetch(`${BASE_URL}/profiles/${localStorage.getItem("username")}/edit`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
    body,
  })
    .then(response => response.json())
    .then((data) => {
      if (data.profile) {
        (history) ? history.push("/profile") : null;
        toast.success(`${type} update success`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
        dispatch({
          type: UPDATE_SUCCESS,
          payload: data.profile,
        });
      } else {
        dispatch({
          type: UPDATE_FAILED,
          payload: data.errors,
        });
      }
    });
};
