import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
import UserManagementReducer from "../slice/UserManagementSlice";
import UserRegistrationReducer from "../slice/UserManagementSlice";


const store = configureStore({
  reducer: {
    LOGIN: LoginReducer,
    AUTH: AuthReducer,
    DISTRIBUTORREGISTRATION: DistributorReducer,
   USERMANAGEMENT:UserManagementReducer,
   USEREGISTRATION:UserRegistrationReducer,
  },
});

export default store;
