import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slice/LoginSlice";
import AuthReducer from "../slice/AuthSlice";
import DistributorReducer from "../slice/DistributionRegistrationSlice";
import UserManagementReducer from "../slice/UserManagementSlice";
import CreateUserReducer from "../slice/CreateNewUserSlice";
import ProductManagementReducer from "../slice/ProductManagementSlice";
import KitManagementReducer from "../slice/KitManagementSlice";
import DistributorManagementReducer from "../slice/DistributionRegistrationSlice";
import BusinessProfileReducer from "../slice/BusinessProfileSlice";
import MessageCentreReducer from "../slice/MessageCentreSlice";
import SuperAdminApproverDataReducer from "../slice/CreateLocationSlice";
import UserProfileReducer from "../slice/UserProfileSlice";
import DashboardListingReducer from "../slice/DashboardListingSlice";
import ReportsListingReducer from "../slice/ReportsListingSlice";








import CreateReportReducer from "../slice/CreateReportGroupSlice";

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
    DISTRIBUTORMANAGEMENT: DistributorManagementReducer,
    BUSINESSPROFILE: BusinessProfileReducer,
    MESSAGECENTRE: MessageCentreReducer,
    SUPERADMINAPPROVER: SuperAdminApproverDataReducer,
    BUSINESSPROFILEFORM: UserProfileReducer,
    DASHBOARDLISTING: DashboardListingReducer,
    REPORTSLISTING: ReportsListingReducer,
    CREATEREPORT: CreateReportReducer,
  },
});

export default store;
