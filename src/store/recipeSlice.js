import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allRecipes: null,
  usersRecipes: null,
};
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setAllRecipes: (state, action) => {
      state.allRecipes = action.payload.allRecipes;
    },
    setUsersRecipes: (state, action) => {
      state.usersRecipes = action.payload.usersRecipes;
    },
    clearAllRecipes: (state) => {
      state.allRecipes = null;
      state.usersRecipes = null;
    },
  },
});
export const { setAllRecipes, setUsersRecipes, clearAllRecipes } =
  recipeSlice.actions;
export default recipeSlice.reducer;
