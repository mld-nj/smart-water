import axios from "axios";
const baseURL = "http://localhost:8000/api";
const request = axios.create({ baseURL });
request.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.token || "";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default request;
