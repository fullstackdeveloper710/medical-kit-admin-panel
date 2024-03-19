import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
import CreateUserReducer from "../slice/UserManagementSlice";
import ProductManagementReducer from "../slice/ProductManagementSlice";
import KitManagementReducer from "../slice/KitManagementSlice";
import DistributorManagementReducer from "../slice/DistributionRegistrationSlice";
import BusinessProfileReducer from "../slice/BusinessProfileSlice";
import UserManagementReducer from "../slice/UserManagementSlice"



const store = configureStore({
  reducer: {
    LOGIN: LoginReducer,
    AUTH: AuthReducer,
    DISTRIBUTORREGISTRATION: DistributorReducer,
    USERMANAGEMENT: UserManagementReducer,
    CREATEUSERANDLOCATION: CreateUserReducer,
    PRODUCTMANAGEMENT: ProductManagementReducer,
    KITMANAGEMENT: KitManagementReducer,
    CREATEUSERANDLOCATION: CreateUserReducer,
    DISTRIBUTORMANAGEMENT:DistributorManagementReducer,
    BUSINESSPROFILE:BusinessProfileReducer,


  },

});

export default store;
