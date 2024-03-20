import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
import UserManagementReducer from "../slice/UserManagementSlice";
import CreateUserReducer from "../slice/CreateNewUserSlice";
import ProductManagementReducer from "../slice/ProductManagementSlice";
import KitManagementReducer from "../slice/KitManagementSlice";
import SuperAdminApproverDataReducer from "../slice/CreateLocationSlice";
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
    SUPERADMINAPPROVER: SuperAdminApproverDataReducer,
  },
});

export default store;
