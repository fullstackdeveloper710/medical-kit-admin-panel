import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  KitManagementData: {},
  status: StatusCode.IDLE,
};
const { KITMANAGEMENT } = ApiEndPoint;
export const KitManagementSlice = createSlice({
  name: "Kitmanagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKitssManagementData.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchKitssManagementData.fulfilled, (state, action) => {
        state.KitManagementData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchKitssManagementData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })

  },
});

export const {} = KitManagementSlice.actions;
export default KitManagementSlice.reducer;

export const fetchKitssManagementData = createAsyncThunk(
    'admin/get/kit',
    async () => {
      try {
        const res = await API.get(KITMANAGEMENT); 
         console.log(res, 'res from slice');
        if (res.data?.status === 200) {
          
          return res.data;
        }
      } catch (error) {
        console.error('Failed to fetch product management data:', error);
        throw error; 
      }
    }
  );


