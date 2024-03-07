import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice"
const store= configureStore({
    reducer:{
        LOGIN:LoginReducer
    }
})

export default store