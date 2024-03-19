import axios from "axios";
import { ApiEndPoint, ApiUrl } from "../helper";

const API = axios.create({
  baseURL: ApiUrl,
});
const requestHandler = async (request) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    request.headers["Authorization"] = "Bearer " + accessToken;
  } catch (e) {
    console.log(e, "err");
  }
  return request;
};
const refreshToken = async () => {
  try {
    const refreshTokenValue = localStorage.getItem("refreshToken");
    const response = await API.post(ApiEndPoint.REFRESHTOKEN, {
      refresh_token: refreshTokenValue,
    });
    if (response.status === 200) {
      const newAccessToken = response.data?.access_token;
      const newRefreshToken = response.data?.refresh_token;
      // Update the stored tokens
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      return newAccessToken;
    } else {
      // Handle error response (e.g., logout user, show login screen)
      console.error("Token refresh failed:", response.data);
      return null;
    }
  } catch (error) {
    console.error("Token refresh error:", error);
    return null;
  }
};
const responseHandler = (response) => {
  return response;
};
API.interceptors.request.use(requestHandler, (error) => {
  Promise.reject(error);
});
API.interceptors.response.use(responseHandler, async (error) => {
  if (error.response && error.response.status !== 401) {
    if (error.response.data) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
  if (error.response && error.response.status === 401) {
    if (error.response.status === 401) {
      const newAccessToken = await refreshToken();
      console.log("newAccessTokennewAccessToken", newAccessToken);
      if (error.response.data) return Promise.reject(error.response.data);
      // message.error("Login session timed out! please login again");
      return Promise.reject(error);
    }
  } else if (error.response && error.response.status === 500) {
    if (error.response.status === 500) {
      console.log("internal-server-error");
    }
  }
});
export default API;
