import { selectUpdateProfile } from "../utils/selectors";
import { createSlice } from "@reduxjs/toolkit";
import API_URL from "../data/DataUrl";
import statusManagement from "../utils/actions";

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

export function sendUpdateProfile(dataToken, newIdentify) {
  return async (dispatch, getState) => {
    const status = selectUpdateProfile(getState()).status;
    console.log(newIdentify);
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
      console.log(data);
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export const sendProfileReducer = reducer;

//export const resetLogin = createAction("profile/reset");
