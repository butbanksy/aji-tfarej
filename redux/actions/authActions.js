import {
  SET_TOKEN,
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS, REVOKE_TOKEN,
} from "./actionTypes";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { acc } from "react-native-reanimated";

export const setTokenRequest = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const revokeToken = () => {
  return {
    type: REVOKE_TOKEN
  }
}

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginRequestSuccess = (token) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: token,
});

export const loginRequestFail = (error) => ({
  type: LOGIN_REQUEST_FAIL,
  payload: error,
});

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(BASE_URL + "/login", {
        email,
        password,
      })
      .then((resp) => {
        console.log("I'm here")
        const { access_token } = resp.data;
        dispatch(loginRequestSuccess(access_token));
      })
      .catch((error) => {
        dispatch(loginRequestFail(error.message));
      });
  };
};
