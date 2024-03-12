import axios from "axios";
import { ApiUrl } from "../helper";
const API = axios.create({ baseURL: ApiUrl });
const tokendata = JSON.parse(localStorage.getItem("authData"));
const token = tokendata?.access_token;
API.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;
