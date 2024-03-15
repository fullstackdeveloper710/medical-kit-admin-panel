import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
import CreateUserReducer from "../slice/CreateNewUserSlice";
const store = configureStore({
  reducer: {
    LOGIN: LoginReducer,
    AUTH: AuthReducer,
    DISTRIBUTORREGISTRATION: DistributorReducer,
    CREATEUSERANDLOCATION: CreateUserReducer,
  },
});

export default store;
