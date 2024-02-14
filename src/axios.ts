import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { message } from "antd";

const service = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const axiosConfig = config;
    return axiosConfig;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code && response.data.code !== 200) {
      message.error(response.data.msg || "请求出错！");
      return Promise.reject(response.data.msg);
    }
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    message.error(error.response.statusText || "服务器出错，请求失败！");
    return Promise.reject(error);
  },
);

export default service;
