import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  ProductManagementData: {},
  status: StatusCode.IDLE,
};
const { PRODUCTMANAGEMENT } = ApiEndPoint;
export const ProductManagementSlice = createSlice({
  name: "Productmanagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsManagementData.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchProductsManagementData.fulfilled, (state, action) => {
        state.ProductManagementData = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchProductsManagementData.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const {} = ProductManagementSlice.actions;
export default ProductManagementSlice.reducer;

export const fetchProductsManagementData = createAsyncThunk(
  "admin/get/products",
  async () => {
    try {
      const res = await API.get(PRODUCTMANAGEMENT);
      if (res.data?.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error("Failed to fetch product management data:", error);
      throw error;
    }
  }
);
