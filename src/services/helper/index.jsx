export const ApiUrl = process.env.REACT_APP_BASEURL;
export const StatusCode = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

export const asignRoles = [
  {
    label: "Super Admin",
    value: "superadmin",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Approver",
    value: "approver",
  },
  {
    label: "User",
    value: "user",
  },
];

export const userPermissions = [
  {
    column: "col-4",
    type: "switch",
    id: "Manage Products",
    label: "Manage Products",
  },
  {
    column: "col-4",
    type: "switch",
    id: "Manage Company Users",
    label: "Manage Company Users",
  },
  {
    column: "col-4",
    type: "switch",
    id: "Manage Business Profile",
    label: "Manage Business Profile",
  },
  {
    column: "col-4",
    type: "switch",
    id: "Manage Distributors",
    label: "Manage Distributors",
  },
  {
    column: "col-4",
    type: "switch",
    id: "Manage Resource Center",
    label: "Manage Resource Center",
  },
  {
    column: "col-4",
    type: "switch",
    id: "Receive Update Notifications",
    label: "Receive Update Notifications",
  },
];
export const ApiEndPoint = {
  LOGIN: "/user/login",
  DISTRIBUTORREGISTER: "/distributor/signup",
  AUTHUSER: "/user/my_account",
  USERMANAGEMENT: "/admin/get_users",
  PRODUCTMANAGEMENT: "/admin/fetch_products",
  KITMANAGEMENT: "/admin/fetch_kits",
  ADMINFETCHLOCATION: "/admin/fetch_location",
  CREATENEWUSER: "/admin/register_user",
  REFRESHTOKEN: "/user/refresh_token",
  DISTRIBUTORMANAGEMENT: "/admin/fetch_distributor",
  BUSINESSPROFILE: "/admin/fetch_location",
  MESSAGECENTRE: "/admin/get_messages",
  ARTICLEREGISTRATION: "/admin/create_article",
  NOTIFICATIONREGISTRATION: "/admin/create_notification",
  SUPERADMINAPPROVERDATA: "/admin/get_approver",
  BUSINESSPROFILEFORM: "/admin/fetch_business_details",
  UPDATEBUSINESSPROFILE: "/admin/edit_business_details",
  SUPERADMINAPPROVERDATA: "/admin/get_approver",
  ADDLOCATION: "/admin/add_location",
  DASHBOARDLISTING:"",
  REPORTSLISTING:"/admin/fetch_report_group",
  CREATEGROUPREPORT: "/admin/create_report_group",
  CREATEREPORT:"/admin/create_report",
  REPORTSDATA:"/admin/get_reportData_list"
};
