import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";

// Define initial state
const initialState = {
  data: [],
  status: StatusCode.IDLE,
  error: null,
};

// Extract API endpoints
const { REPORTSLISTING } = ApiEndPoint;

// Create async thunk for fetching reports listing data
export const fetchReportsListingData = createAsyncThunk(
  "reports/fetchReportsListingData",
  async () => {
    try {
      const response = await API.get(REPORTSLISTING);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch reports listing data:", error.message);
      throw error;
    }
  }
);

// Create reports listing slice
export const reportsListingSlice = createSlice({
  name: "reportsListing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportsListingData.pending, (state) => {
        state.status = StatusCode.LOADING;
        state.error = null;
      })
      .addCase(fetchReportsListingData.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;
        state.data = action.payload.data;
      })
      .addCase(fetchReportsListingData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
        state.error = action.error.message;
      });
  },
});

// Export reducer and actions
export const { } = reportsListingSlice.actions;
export default reportsListingSlice.reducer;
