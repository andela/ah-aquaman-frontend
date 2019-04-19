import { toast } from "react-toastify";
import {
  FETCHING_FOLLOWING_LIST, FOLLOWERS_LOADED, FOLLOWING_LIST_LOADED_FAILED, FOLLOWING_LIST_LOADED, FOLLOWING_USER_STARTED, FOLLOWING_USER_FAIL, FOLLOWING_USER_SUCCESS, UNFOLLOWING_USER_SUCCESS,
} from "../types";

const BASE_URL = process.env.BASE_URL;
export const followUser = username => (dispatch) => {
  dispatch({
    type: FOLLOWING_USER_STARTED,
  });
  return fetch(`${BASE_URL}/profiles/${username}/follows/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
  }).then(res => res.json())
    .then((data) => {
      if (data.profile.error) {
        toast.error(`${data.profile.error}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
        dispatch({
          type: FOLLOWING_USER_FAIL,
          payload: data.profile.error,
        });
      } else {
        setTimeout(() => {
          document.location.reload();
        }, 3000);

        toast.info(`${data.profile.message}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
        dispatch({
          type: FOLLOWING_USER_SUCCESS,
          payload: data.profile,
        });
      }
    }).catch((err) => {
      dispatch({
        type: FOLLOWING_USER_FAIL,
        payload: "Something went wrong",
      });
    });
};
export const unFollowUser = username => (dispatch) => {
  dispatch({
    type: FOLLOWING_USER_STARTED,
  });
  return fetch(`${BASE_URL}/profiles/${username}/follows/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
  }).then(res => res.json())
    .then((data) => {
      dispatch({
        type: UNFOLLOWING_USER_SUCCESS,
        payload: data.profile,
      });

      setTimeout(() => {
        document.location.reload();
      }, 3000);
      if (data.profile.message) {
        toast.info(`${data.profile.message}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    }).catch((err) => {
      dispatch({
        type: FOLLOWING_USER_FAIL,
        payload: "Something went wrong",
      });
    });
};

export const getUserfollowing = username => (dispatch) => {
  dispatch({
    type: FETCHING_FOLLOWING_LIST,
  });
  return fetch(`${BASE_URL}/profiles/${username}/follows/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
  }).then(res => res.json())
    .then((data) => {
      dispatch({
        type: FOLLOWING_LIST_LOADED,
        payload: data.profile,
      });
    }).catch((err) => {
      dispatch({
        type: FOLLOWING_LIST_LOADED_FAILED,
        payload: "Something went wrong",
      });
    });
};

export const getUserfollowers = username => (dispatch) => {
  dispatch({
    type: FETCHING_FOLLOWING_LIST,
  });
  return fetch(`${BASE_URL}/profiles/${username}/followers/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
  }).then(res => res.json())
    .then((data) => {
      dispatch({
        type: FOLLOWERS_LOADED,
        payload: data.profile,
      });
    });
};
