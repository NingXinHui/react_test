import { message } from "antd";
import axios from "axios";
import { Storage } from "../storage";

//请求拦截器
axios.interceptors.request.use(
  (request) => {
    const token = Storage.getStorage("token");
    // let token = localStorage.getItem("token");
    if (token) {
      // token = token.replace(/\"/g, "");
      //获取请求对象 设置请求头
      request.headers.token = token;
    }
    return request;
  },
  (Error) => Promise.reject(Error)
);
//响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (Error) => {
    const resp = Error.response;
    if (resp) {
      switch (resp.status) {
        case 500:
          message.error("服务器网络异常!");
          break;
        case 401:
          message.error("身份认证异常,请重新登录!");
          Storage.removeStorage("token");
          window.location.href = "/login";
          break;
        case 404:
          message.error("请求路径异常!");
          break;
        default:
          break;
      }
    }
    return Promise.reject(Error);
  }
);
