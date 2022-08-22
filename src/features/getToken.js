import { createSlice, createAction } from "@reduxjs/toolkit";
// DATA et ACTIONS
import statusManagement from "../utils/actions";
import { selectToken } from "../utils/selectors";
import API_URL from "../data/DataUrl";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: statusManagement,
});

/**
 * Custom hook that get user token
 * @param {object} identifiers
 * @returns {dataToken} user token
 */
export function fetchOrUpdateToken(identifiers) {
  return async (dispatch, getState) => {
    const status = selectToken(getState()).status;

    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetching());
    try {
      const response = await fetch(API_URL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(identifiers),
      });
      const data = await response.json();
      dispatch(actions.resoldved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export const tokenReducer = reducer;

export const resetLogin = createAction("login/reset");
