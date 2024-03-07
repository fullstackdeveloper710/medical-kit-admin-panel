
import axios from "axios";
import { ApiUrl } from "../helper";
const API= axios.create({baseURL:ApiUrl});
API.interceptors.request.use(
    (config)=>{
  const token= localStorage.getItem("token");
  if(token){
   config.headers.Authorization= `Bearer ${token}`
  } 
    return config;
},
  (error)=>{
    return Promise.reject(error)
  }
)
export default API