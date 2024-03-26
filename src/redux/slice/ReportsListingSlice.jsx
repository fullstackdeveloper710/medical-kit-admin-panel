import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  ReportsListingData: {},
  status: StatusCode.IDLE,
};
const { REPORTSLISTING } = ApiEndPoint;
export const ReportsListingSlice = createSlice({
  name: "reportslisting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportsListingData.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchReportsListingData.fulfilled, (state, action) => {
        state.ReportsListingData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchReportsListingData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
    // add user

    // });
  },
});

export const {} = ReportsListingSlice.actions;
export default ReportsListingSlice.reducer;

export const fetchReportsListingData = createAsyncThunk(
  "admin/get/reportsListing",
  async () => {
    try {
      const res = await API.get(REPORTSLISTING);
      if (res.data?.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error("Failed to fetch repports listing data:", error);
      throw error;
    }
  }
);
