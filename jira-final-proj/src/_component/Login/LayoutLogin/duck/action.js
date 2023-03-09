import * as ActionType from "./types";
import api from "../../../../utils/apiUtils";

export const actLogin = (user) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("/Users/signin", user)
      .then((res) => {
        dispatch(actLoginSuccess(res.data.content));
      })
      .catch((error) => {
        dispatch(actLoginFail(error));
      });
  };
};

export const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

export const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

export const actLoginFail = (error) => {
  return {
    type: ActionType.LOGIN_FAIL,
    payload: error,
  };
};
