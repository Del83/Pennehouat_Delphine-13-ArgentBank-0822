import { configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "../features/getToken";
import { profileReducer } from "../features/getProfile";
import { sendProfileReducer } from "../features/sendProfile";

export default configureStore({
  reducer: {
    token: tokenReducer,
    profile: profileReducer,
    updateProfile: sendProfileReducer,
  },
});
