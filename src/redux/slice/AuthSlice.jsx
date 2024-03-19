import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../services/api";
import { toast } from "react-toastify";
import { ApiEndPoint, StatusCode } from "../../services/helper";
const storedAccessToken = localStorage?.getItem("accessToken");
const storedRefreshToken = localStorage?.getItem("refreshToken");

const initialState = {
  userData: null,
  access_token: storedAccessToken,
  refresh_token: storedRefreshToken,
};

const { AUTHUSER } = ApiEndPoint;
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.access_token = action.payload?.access_token;
      state.refresh_token = action.payload?.refresh_token;
      localStorage.setItem("accessToken", action.payload?.access_token);
      localStorage.setItem("refreshToken", action.payload?.refresh_token);
    },

    clearAuthUser: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});
export const { setAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
export const authUser = createAsyncThunk("auth/user", async () => {
  try {
    const res = await API.get(`${AUTHUSER}`);
    if (res.status === 200) {
      const result = res.data?.data?.user_details;
      return result;
    }
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});
