export const ApiUrl = process.env.REACT_APP_BASEURL;
export const StatusCode = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};
export const ApiEndPoint = {
  LOGIN: "/user/login",
  DISTRIBUTORREGISTER: "/distributor/signup",
  AUTHUSER: "/user/my_account",
  USERMANAGEMENT: "/admin/get_users",
  USERREGISTRATION:"/admin/register_user",
  PRODUCTMANAGEMENT:"/admin/fetch_products",
  KITMANAGEMENT:"/admin/fetch_kits",
  DISTRIBUTORMANAGEMENT:"/admin/fetch_distributor",
  BUSINESSPROFILE:"/admin/fetch_location"
};
