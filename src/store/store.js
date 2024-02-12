import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import recipeSlice from "./recipeSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: recipeSlice,
  },
});

export default store;
