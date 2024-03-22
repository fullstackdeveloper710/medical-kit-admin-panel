import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiEndPoint, StatusCode } from "../../services/helper";
import API from "../../services/api";
import { toast } from "react-toastify";
const initialState = {
  MessageCentreData: {},
  status: StatusCode.IDLE,
};
const { MESSAGECENTRE ,ARTICLEREGISTRATION,NOTIFICATIONREGISTRATION} = ApiEndPoint;


export const messageCentreSlice = createSlice({
    name: "MessageCentre",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMessageCentreData.pending, (state, action) => {
          state.status = StatusCode.LOADING;
        })
        .addCase(fetchMessageCentreData.fulfilled, (state, action) => {
          state.MessageCentreData = action.payload;
          state.status = StatusCode.IDLE;
        })
        .addCase(fetchMessageCentreData.rejected, (state, action) => {
          state.status = StatusCode.ERROR;
        })
        .addCase(RegisterEditArticle.pending, (state, action) => {
          state.status = StatusCode.LOADING;
        })
        .addCase(RegisterEditArticle.fulfilled, (state, action) => {
          state.MessageCentreData = action.payload;
          state.status = StatusCode.IDLE;
        })
        .addCase(RegisterEditArticle.rejected, (state, action) => {
          state.status = StatusCode.ERROR;
        })
        // notification
        .addCase(RegisterEditNotification.pending, (state, action) => {
          state.status = StatusCode.LOADING;
        })
        .addCase(RegisterEditNotification.fulfilled, (state, action) => {
          state.MessageCentreData = action.payload;
          state.status = StatusCode.IDLE;
        })
        .addCase(RegisterEditNotification.rejected, (state, action) => {
          state.status = StatusCode.ERROR;
        });
    },
  });
  
 
  
export const {} = messageCentreSlice.actions;
export default messageCentreSlice.reducer;

export const fetchMessageCentreData = createAsyncThunk(
    'admin/get/message-centre',
    async () => {
      try {
        const res = await API.get(MESSAGECENTRE); 
         console.log(res, 'res from slice');
        if (res.data?.status === 200) {
          
          return res.data;
        }
      } catch (error) {
        console.error('Failed to fetch message centre  data:', error);
        throw error; 
      }
    }
  );


  export const RegisterEditArticle = createAsyncThunk("/user/edit-article", async (data) => {
    try {
        console.log(data,"data article")

      const res = await API.post(`${ARTICLEREGISTRATION}`, data);
      if (res.data?.status === 200) {
        toast.success(res.data?.data?.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  });


  export const RegisterEditNotification = createAsyncThunk("/user/edit-notification", async (data) => {
    try {
        console.log(data,"data Notification")

      const res = await API.post(`${NOTIFICATIONREGISTRATION}`, data);
      if (res.data?.status === 200) {
        toast.success(res.data?.data?.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  });