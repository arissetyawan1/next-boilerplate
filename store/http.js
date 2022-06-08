import axios from "axios";
// import { appConfig } from "../configs/env";
import { App, appConfig } from "../config/app";

const instance = axios.create({
  baseURL: appConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const http = {
  get: async (url, opts = {}) => {
    const resp = await instance.get(appConfig.apiUrl+ url);

    return resp.data;
  },
  post: async (url, data, opts) => {
    const resp = await instance.post(appConfig.apiUrl+ url, data);

    return resp.data;
  },
  put: async (url, data, opts) => {
    const resp = await instance.put(appConfig.apiUrl+ url, data);

    return resp.data;
  },
  del: async (url, opts) => {
    const resp = await instance.delete(appConfig.apiUrl+ url);

    return resp.data;
  },
  upload: async (url, data) => {
    let req = await instance.post(appConfig.apiUrl+ url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return req.data;
  },
};