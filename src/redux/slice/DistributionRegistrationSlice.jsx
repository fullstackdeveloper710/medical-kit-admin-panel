import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  DistributorRegisaterData: {},
  status: StatusCode.IDLE,
};
const { DISTRIBUTORREGISTER } = ApiEndPoint;
export const distributionRegistrationSlice = createSlice({
  name: "distributorregistration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(distributorregisteruser.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(distributorregisteruser.fulfilled, (state, action) => {
        state.DistributorRegisaterData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(distributorregisteruser.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const {} = distributionRegistrationSlice.actions;
export default distributionRegistrationSlice.reducer;

export const distributorregisteruser = createAsyncThunk(
  "distributor/user/register",
  async (data) => {
    try {
      const res = await API.post(`${DISTRIBUTORREGISTER}`, data, {
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
  }
);
