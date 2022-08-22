import { createSlice } from "@reduxjs/toolkit";
// DATA et ACTIONS
import statusManagement from "../utils/actions";
import { selectProfile } from "../utils/selectors";
import API_URL from "../data/DataUrl";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: "profile",
  initialState,
  reducers: statusManagement,
});

/**
 * Custom hook that get user profile data
 * @param {string} dataToken user token
 * @returns {UserData} user profile data
 */
export function fetchProfile(dataToken) {
  return async (dispatch, getState) => {
    const status = selectProfile(getState()).status;

    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetching());
    try {
      const response = await fetch(API_URL + "profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + dataToken.data?.body.token,
        },
      });
      const data = await response.json();
      dispatch(actions.resoldved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export const profileReducer = reducer;
