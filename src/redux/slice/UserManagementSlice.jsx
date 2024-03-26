import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  UserManagementData: {},
  status: StatusCode.IDLE,
};
const { USERMANAGEMENT, USERREGISTRATION } = ApiEndPoint;
export const UserManagementSlice = createSlice({
  name: "usermanagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserManagementData.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchUserManagementData.fulfilled, (state, action) => {
        state.UserManagementData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchUserManagementData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })
      // add user
      .addCase(registeruser.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.UserManagementData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const {} = UserManagementSlice.actions;
export default UserManagementSlice.reducer;

export const fetchUserManagementData = createAsyncThunk(
  "admin/get/users",
  async () => {
    try {
      const res = await API.get(USERMANAGEMENT);
      console.log(res, "res from slice");
      if (res.data?.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error("Failed to fetch User management data:", error);
      throw error;
    }
  }
);

export const registeruser = createAsyncThunk("/user/register", async (data) => {
  try {
    const res = await API.post(`${USERREGISTRATION}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data?.status === 200) {
      toast.success(res.data?.data?.message);
    }
    return res.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});
