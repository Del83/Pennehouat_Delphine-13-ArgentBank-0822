import { selectProfile } from "../utils/selectors";
import { createSlice } from "@reduxjs/toolkit";
import API_URL from "../data/DataUrl";
import statusManagement from "../utils/actions";

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
      console.log(data);
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export const profileReducer = reducer;

//export const resetLogin = createAction("profile/reset");
