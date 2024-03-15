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
  ADMINFETCHLOCATION: "/admin/fetch_location",
  CREATENEWUSER: "/admin/register_user",
  REFRESHTOKEN: "/user/refresh_token",
};
