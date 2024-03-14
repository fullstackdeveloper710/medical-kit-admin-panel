import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
const store = configureStore({
  reducer: {
    LOGIN: LoginReducer,
    AUTH: AuthReducer,
    DISTRIBUTORREGISTRATION: DistributorReducer,
  },
});

export default store;
