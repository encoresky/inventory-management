/* eslint-disable no-undef */
"use client";
import axios from "axios";
// import Cookies from "js-cookie";

export const axiosClient = axios.create({
  baseURL: "http://localhost/manage/",
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

/* axiosClient.interceptors.request.use(
  (config) => {
    // const hasAccessToken = getToken();
    // const hasAccessToken = Cookies.get("sid");
    // config.headers.Cookie = `SID=${hasAccessToken}`;
    // hasAccessToken && (config.headers["SID"] = `${hasAccessToken}`);

    if (config.data instanceof FormData) {
      config.headers.ContentType = config.data.getHeaders();
    } else {
      config.headers.ContentType = "application/json";
    }
    return config;
  },
  (error) => {
    console.log("error", error);
    // logError(error);
    return Promise.reject(error);
  },
  { synchronous: true }
); */
/* 
axiosClient.interceptors.response.use(
  (response) => {
    console.log("response", response);
    if (response && response.data && response.data.type == "application/pdf") {
      return response.data;
    } else if (response.data) {
      return { ...response.data };
    } else if (response.status == 200) {
      return response.status;
    }
    return Promise.reject(response.data);
  },
  (error) => {
    // logError(error);
    console.log("error-r", error);

    switch (error?.response?.status) {
      case 400:
        return Promise.reject(error.response.status);
      case 401:
        return Promise.reject(error.response.status);
      case 403:
        unauthorizeAccess();
        return Promise.reject(error.response.status);
      case 404:
        return Promise.reject(error.response.status);
      case 405:
        return Promise.reject(error.response.status);
      case 501:
        return Promise.reject(error.response.status);
      case 422:
        return Promise.reject(error.response.data);
      default:
        return Promise.reject(error);
    }
  }
);

const unauthorizeAccess = (status) => {
  console.log("unauthorizeAccess");
}; */
