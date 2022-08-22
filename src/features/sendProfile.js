import { createSlice } from "@reduxjs/toolkit";
// DATA et ACTIONS
import statusManagement from "../utils/actions";
import { selectUpdateProfile } from "../utils/selectors";
import API_URL from "../data/DataUrl";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: "updateProfile",
  initialState,
  reducers: statusManagement,
});

/**
 * Custom hook that send update profile
 * @param {string} dataToken user token
 * @param {object} newIdentify new user credentials
 * @returns {newIdentify} new user credentials
 */
export function sendUpdateProfile(dataToken, newIdentify) {
  return async (dispatch, getState) => {
    const status = selectUpdateProfile(getState()).status;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetching());
    try {
      const response = await fetch(API_URL + "profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + dataToken.data?.body.token,
        },
        body: JSON.stringify(newIdentify),
      });
      const data = await response.json();
      dispatch(actions.resoldved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export const sendProfileReducer = reducer;
