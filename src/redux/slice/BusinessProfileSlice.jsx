import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  BusinessProfileData: {},
  status: StatusCode.IDLE,
};
const { BUSINESSPROFILE } = ApiEndPoint;
export const BusinessProfileSlice = createSlice({
  name: "Businessprofile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessProfileData.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchBusinessProfileData.fulfilled, (state, action) => {
        state.BusinessProfileData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchBusinessProfileData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })

  },
});

export const {} = BusinessProfileSlice.actions;
export default BusinessProfileSlice.reducer;

export const fetchBusinessProfileData = createAsyncThunk(
    'admin/get/businessprofile',
    async () => {
      try {
        const res = await API.get(BUSINESSPROFILE); 
         console.log(res, 'res from slice');
        if (res.data?.status === 200) {
          
          return res.data;
        }
      } catch (error) {
        console.error('Failed to fetch BUSINESSPROFILE data:', error);
        throw error; 
      }
    }
  );


