import { createSlice } from "@reduxjs/toolkit";
const storedAuthData = localStorage?.getItem("authData");
const initialState = {
  localData: JSON.parse(storedAuthData),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.localData = action.payload;
      localStorage.setItem("authData", JSON.stringify(action.payload));
    },
    clearAuthUser: (state) => {
      state.localData = null;
      localStorage.removeItem("authData");
    },
  },
});
export const { setAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
